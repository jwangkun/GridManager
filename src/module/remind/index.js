/*
 * remind: 表头提醒
 */
import './style.less';
import jTool from '@jTool';
import { isObject } from '@jTool/utils';
import { getQuerySelector, getDiv, clearTargetEvent } from '@common/base';
import { FAKE_TABLE_HEAD_KEY } from '@common/constants';
import { parseTpl } from '@common/parse';
import remindTpl from './remind.tpl.html';
import { getEvent, eventMap } from './event';
class Remind {
    /**
     * 初始化表头提醒
     * @param gridManagerName
     */
    init(gridManagerName) {
        eventMap[gridManagerName] = getEvent(gridManagerName, `${getQuerySelector(gridManagerName)} [${FAKE_TABLE_HEAD_KEY}]`);
        const { target, events, selector } = eventMap[gridManagerName].remindStart;

        const $tableDiv = getDiv(gridManagerName);
        jTool(target).on(events, selector, function () {
            const $onlyRemind = jTool(this);
            const $raArea = $onlyRemind.find('.ra-area');
            const theLeft = ($tableDiv.get(0).offsetWidth - ($onlyRemind.offset().left - $tableDiv.offset().left)) > $raArea.get(0).offsetWidth + 20;
            theLeft ? $raArea.removeClass('right-model') : $raArea.addClass('right-model');
        });
    }

    /**
     * 获取表头提醒所需HTML
     * @param params
     * @returns {string}
     */
    @parseTpl(remindTpl)
	createHtml(params) {
        const { remind } = params;
        let styleStr = '';
        let text = '';
        if (isObject(remind)) {
            text = remind.text;
        } else {
            text = remind;
        }

        const style = remind.style;
        if (isObject(style)) {
            styleStr = 'style=';
            Object.keys(style).forEach(key => {
                styleStr = `${styleStr}${key}:${style[key]};`;
            });
        }
	    return {
            text,
            styleStr
        };
	}

	/**
	 * 消毁
	 * @param gridManagerName
	 */
	destroy(gridManagerName) {
	    clearTargetEvent(eventMap[gridManagerName]);
	}
}
export default new Remind();
