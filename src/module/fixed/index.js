import jTool from '@jTool';
import { getWrap, getDiv, getTh, getFakeThead, getThead } from '@common/base';
import { TABLE_KEY, EMPTY_TPL_KEY, TH_NAME } from '@common/constants';
import { each } from '@jTool/utils';
import './style.less';

const LEFT = 'left';
const RIGHT = 'right';
const SHADOW_COLOR = '#e8e8e8';
const getStyle = (gridManagerName, item, direction, shadowValue, theadWidth) => {
    let directionValue = '';
    if (direction === LEFT) {
        directionValue = item.offsetLeft;
    }
    if (direction === RIGHT) {
        directionValue = theadWidth - item.offsetLeft - item.offsetWidth;
    }
    return `
        [gm-overflow-x="true"] [${TABLE_KEY}="${gridManagerName}"] tr:not([${EMPTY_TPL_KEY}]) td:nth-of-type(${jTool(item).index() + 1}){
            position: sticky;
            ${direction}: ${directionValue}px;
            border-right: none;
            z-index: 3;
            box-shadow: ${shadowValue};
        }`;
};

const getFixedQuerySelector = type => {
    return `th[fixed="${type}"]`;
};
class Fixed {
    enable = {};

    /**
     * 生成td固定列样式: 通过添加style的方式比修改td的dom性能会高
     * @param gridManagerName
     */
    init(gridManagerName) {
        this.enable[gridManagerName] = true;

        const $thead = getThead(gridManagerName);
        const $tableDiv = getDiv(gridManagerName);
        const disableLine = getWrap(gridManagerName).hasClass('disable-line');
        const styleId = `fixed-style-${gridManagerName}`;
        let styleLink = document.getElementById(styleId);

        if (!styleLink) {
            styleLink = document.createElement('style');
            styleLink.id = styleId;
        }
        let styleStr = '';
        const $fixedLeft = $thead.find(getFixedQuerySelector(LEFT));
        let shadowValue = disableLine ? '' : `inset -1px 0 ${SHADOW_COLOR}`;
        each($fixedLeft, (index, item) => {
            if (index === $fixedLeft.length - 1) {
                shadowValue = `2px 1px 3px ${SHADOW_COLOR}`;
            }

            styleStr += getStyle(gridManagerName, item, LEFT, shadowValue);
        });
        const theadWidth = $thead.width();
        shadowValue = `-2px 1px 3px ${SHADOW_COLOR}`;
        each($thead.find(getFixedQuerySelector(RIGHT)), (index, item) => {
            if (index !== 0) {
                shadowValue = disableLine ? '' : `-1px 1px 0 ${SHADOW_COLOR}`;
            }
            styleStr += getStyle(gridManagerName, item, RIGHT, shadowValue, theadWidth);
        });
        styleLink.innerHTML = styleStr;
        $tableDiv.append(styleLink);
    }

    /**
     * 渲染fake thead: 在scroll事件中触发，原因是fake thead使用了绝对定位，在th使用sticky时，需要实时修正left | right值
     * @param gridManagerName
     */
    updateFakeThead(gridManagerName) {
        if (!this.enable[gridManagerName]) {
            return;
        }

        const fixedBorderAttr = 'fixed-border';
        const $fakeThead = getFakeThead(gridManagerName);
        const $tableDiv = getDiv(gridManagerName);
        const scrollLeft = $tableDiv.scrollLeft();
        const $fixedList = $fakeThead.find(getFixedQuerySelector(LEFT));

        each($fixedList, (index, item) => {
            item.style.left = -(scrollLeft - getTh(gridManagerName, item.getAttribute(TH_NAME)).get(0).offsetLeft) + 'px';
            index === $fixedList.length - 1 && item.setAttribute(fixedBorderAttr, '');
        });

        const $rightList = $fakeThead.find(getFixedQuerySelector(RIGHT));
        const theadWidth = $fakeThead.width();

        each($rightList, (index, item) => {
            const $th = getTh(gridManagerName, item.getAttribute(TH_NAME));
            item.style.right = (theadWidth - $th.get(0).offsetLeft + scrollLeft - $th.width())  + 'px';
            index === 0 && item.setAttribute(fixedBorderAttr, '');
        });
    }
}

export default new Fixed();
