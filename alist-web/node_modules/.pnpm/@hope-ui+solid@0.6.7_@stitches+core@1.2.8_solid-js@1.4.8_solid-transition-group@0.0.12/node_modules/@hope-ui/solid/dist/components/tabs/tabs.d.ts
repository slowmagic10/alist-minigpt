import { SystemStyleObject } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
import { TabListVariants, TabVariants } from "./tabs.styles";
declare type ThemeableTabsOptions = Pick<TabListVariants, "alignment"> & Omit<TabVariants, "orientation"> & {
    /**
     * If `true`, the content of inactive tab panels stays mounted when unselected.
     */
    keepAlive?: boolean;
};
interface TabsOptions extends ThemeableTabsOptions {
    /**
     * The orientation of the tab list.
     */
    orientation?: "horizontal" | "vertical";
    /**
     * The index of the selected tab.
     * (in controlled mode)
     */
    index?: number;
    /**
     * The initial index of the selected tab.
     * (in uncontrolled mode)
     */
    defaultIndex?: number;
    /**
     * The id of the tabs component.
     */
    id?: string;
    /**
     * Callback invoked when the index changes.
     * (in controlled mode)
     */
    onChange?: (index: number) => void;
}
export declare type TabsProps<C extends ElementType = "div"> = HTMLHopeProps<C, TabsOptions>;
interface TabsState extends Required<TabVariants> {
    /**
     * The index of the selected tab.
     * (In uncontrolled mode)
     */
    _selectedIndex: number;
    /**
     * If `true`, the tabs is in controlled mode.
     * (have index and onChange props)
     */
    isControlled: boolean;
    /**
     * The index of the selected tab.
     * (in controlled mode)
     */
    selectedIndex: number;
    /**
     * The base id used as prefix for tab and tab-panel ids.
     */
    baseId: string;
    /**
     * If `true`, the content of inactive tab panels stays mounted when unselected.
     */
    keepAlive: boolean;
    /**
     * The orientation of the tab list.
     */
    orientation: "horizontal" | "vertical";
    /**
     * The alignment of tabs in the tablist.
     */
    alignment: TabListVariants["alignment"];
}
/**
 * Tabs provides context and logic for all tabs components.
 */
export declare function Tabs<C extends ElementType = "div">(props: TabsProps<C>): import("solid-js").JSX.Element;
export declare namespace Tabs {
    var toString: () => string;
}
interface TabsContextValue {
    state: TabsState;
    /**
     * Callback to set the active tab index.
     */
    setSelectedIndex: (index: number) => void;
    /**
     * Return `true` if the given index is the selected one.
     */
    isSelectedIndex: (index: number) => boolean;
    /**
     * Return the tab `id` of the given index.
     */
    getTabId: (index: number) => string;
    /**
     * Return the tab panel `id` of the given index.
     */
    getTabPanelId: (index: number) => string;
    /**
     * Register a `Tab` to the context.
     * @return The index of the tab.
     */
    registerTab: (node: HTMLButtonElement) => number;
    /**
     * Register a `TabPanel` to the context.
     * @return The index of the tab panel.
     */
    registerTabPanel: (node: HTMLElement) => number;
    /**
     * Focus the previous non disabled tab.
     */
    focusPrevTab: () => void;
    /**
     * Focus the next non disabled tab.
     */
    focusNextTab: () => void;
    /**
     * Focus the first non disabled tab.
     */
    focusFirstTab: () => void;
    /**
     * Focus the last non disabled tab.
     */
    focusLastTab: () => void;
}
export declare function useTabsContext(): TabsContextValue;
export interface TabsStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        tabList?: SystemStyleObject;
        tab?: SystemStyleObject;
        tabPanel?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableTabsOptions;
    };
}
export {};
//# sourceMappingURL=tabs.d.ts.map