import { JSX } from "solid-js";
import { ElementType, HTMLHopeProps } from "../types";
interface TabOptions {
    /**
     * The `id` of the tab-panel activated by this tab.
     */
    panelId?: string;
}
export declare type TabProps<C extends ElementType = "button"> = HTMLHopeProps<C, TabOptions>;
/**
 * Tab button used to activate a specific tab panel. It renders a `button` by default.
 */
export declare function Tab<C extends ElementType = "button">(props: TabProps<C>): JSX.Element;
export declare namespace Tab {
    var toString: () => string;
}
export {};
//# sourceMappingURL=tab.d.ts.map