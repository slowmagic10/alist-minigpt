import { ElementType, HTMLHopeProps } from "../types";
export declare type ListItemProps<C extends ElementType = "li"> = HTMLHopeProps<C>;
/**
 * ListItem is used to render a list item, it renders a `<li>` by default.
 */
export declare function ListItem<C extends ElementType = "li">(props: ListItemProps<C>): import("solid-js").JSX.Element;
export declare namespace ListItem {
    var toString: () => string;
}
//# sourceMappingURL=list-item.d.ts.map