import { JSX } from "solid-js";
import { ElementType, HTMLHopeProps } from "../types";
export declare type TabListProps<C extends ElementType = "div"> = HTMLHopeProps<C>;
/**
 * TabList is used to manage a list of tab buttons. It renders a `div` by default,
 * and is responsible of the keyboard interaction between tabs.
 */
export declare function TabList<C extends ElementType = "div">(props: TabListProps<C>): JSX.Element;
export declare namespace TabList {
    var toString: () => string;
}
//# sourceMappingURL=tab-list.d.ts.map