import {
    GM_VERSION,
    TABLE_KEY,
    RENDERING_KEY,
    WRAP_KEY,
    DIV_KEY,
    CONFIG_KEY,
    TOOLBAR_KEY,
    TABLE_HEAD_KEY,
    FAKE_TABLE_HEAD_KEY,
    ORDER_WIDTH,
    ORDER_KEY,
    CHECKBOX_WIDTH,
    CHECKBOX_KEY,
    CHECKBOX_DISABLED_KEY,
    TR_CACHE_KEY,
    TR_LEVEL_KEY,
    TR_CACHE_ROW,
    TR_PARENT_KEY,
    TR_CHILDREN_STATE,
    COL_PROP_DISABLED,
    NO_SELECT_CLASS_NAME,
    EMPTY_DATA_CLASS_NAME,
    READY_CLASS_NAME,
    TABLE_PURE_LIST,
    LOADING_CLASS_NAME,
    LAST_VISIBLE,
    TH_VISIBLE,
    GM_CREATE,
    CHECKED,
    INDETERMINATE,
    UNCHECKED,
    CHECKED_CLASS,
    INDETERMINATE_CLASS
} from '@common/constants';

describe('常量验证', () => {
    it('GM_VERSION', () => {
        expect(GM_VERSION).toBe(process.env.VERSION);
    });

    it('TABLE_KEY', () => {
        expect(TABLE_KEY).toBe('grid-manager');
    });

    it('RENDERING_KEY', () => {
        expect(RENDERING_KEY).toBe('gm-rendering');
    });

    it('WRAP_KEY', () => {
        expect(WRAP_KEY).toBe('grid-manager-wrap');
    });

    it('DIV_KEY', () => {
        expect(DIV_KEY).toBe('grid-manager-div');
    });

    it('CONFIG_KEY', () => {
        expect(CONFIG_KEY).toBe('grid-manager-config');
    });

    it('TOOLBAR_KEY', () => {
        expect(TOOLBAR_KEY).toBe('grid-manager-toolbar');
    });

    it('TABLE_HEAD_KEY', () => {
        expect(TABLE_HEAD_KEY).toBe('grid-manager-thead');
    });

    it('FAKE_TABLE_HEAD_KEY', () => {
        expect(FAKE_TABLE_HEAD_KEY).toBe('grid-manager-mock-thead');
    });

    it('TR_CACHE_KEY', () => {
        expect(TR_CACHE_KEY).toBe('gm-cache-key');
    });

    it('TR_CACHE_ROW', () => {
        expect(TR_CACHE_ROW).toBe('gm-cache-row');
    });

    it('TR_LEVEL_KEY', () => {
        expect(TR_LEVEL_KEY).toBe('gm-level-key');
    });

    it('TR_PARENT_KEY', () => {
        expect(TR_PARENT_KEY).toBe('parent-key');
    });

    it('TR_CHILDREN_STATE', () => {
        expect(TR_CHILDREN_STATE).toBe('children-state');
    });

    it('COL_PROP_DISABLED', () => {
        expect(COL_PROP_DISABLED).toBe('gm_checkbox_disabled');
    });

    it('ORDER_WIDTH', () => {
        expect(ORDER_WIDTH).toBe('50px');
    });

    it('ORDER_KEY', () => {
        expect(ORDER_KEY).toBe('gm_order');
    });

    it('CHECKBOX_WIDTH', () => {
        expect(CHECKBOX_WIDTH).toBe('40px');
    });

    it('CHECKBOX_KEY', () => {
        expect(CHECKBOX_KEY).toBe('gm_checkbox');
    });

    it('CHECKBOX_DISABLED_KEY', () => {
        expect(CHECKBOX_DISABLED_KEY).toBe(CHECKBOX_KEY + '_disabled');
    });

    it('NO_SELECT_CLASS_NAME', () => {
        expect(NO_SELECT_CLASS_NAME).toBe('no-select-text');
    });

    it('EMPTY_DATA_CLASS_NAME', () => {
        expect(EMPTY_DATA_CLASS_NAME).toBe('empty-data');
    });

    it('READY_CLASS_NAME', () => {
        expect(READY_CLASS_NAME).toBe('GridManager-ready');
    });

    it('LOADING_CLASS_NAME', () => {
        expect(LOADING_CLASS_NAME).toBe('gm-load-area');
    });

    it('LAST_VISIBLE', () => {
        expect(LAST_VISIBLE).toBe('last-visible');
    });

    it('TH_VISIBLE', () => {
        expect(TH_VISIBLE).toBe('th-visible');
    });

    it('GM_CREATE', () => {
        expect(GM_CREATE).toBe('gm-create');
    });

    it('TABLE_PURE_LIST', () => {
        expect(TABLE_PURE_LIST).toEqual(['class', 'style']);
    });

    it('CHECKED', () => {
        expect(CHECKED).toBe('checked');
    });

    it('INDETERMINATE', () => {
        expect(INDETERMINATE).toBe('indeterminate');
    });

    it('UNCHECKED', () => {
        expect(UNCHECKED).toBe('unchecked');
    });

    it('CHECKED_CLASS', () => {
        expect(CHECKED_CLASS).toBe('gm-checkbox-checked');
    });

    it('INDETERMINATE_CLASS', () => {
        expect(INDETERMINATE_CLASS).toBe('gm-checkbox-indeterminate');
    });
});
