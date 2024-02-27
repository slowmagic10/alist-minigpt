import { Property } from "csstype";
import { MarginProps } from "../../styled-system/props/margin";
import { ResponsiveValue } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
interface ListOptions {
    /**
     * Short hand for the `list-style-type` css property.
     */
    styleType?: Property.ListStyleType;
    /**
     * Short hand for the `list-style-position` css property.
     */
    stylePosition?: Property.ListStylePosition;
    /**
     * The space between each list item.
     */
    spacing?: ResponsiveValue<MarginProps["margin"]>;
}
export declare type ListProps<C extends ElementType = "ul"> = HTMLHopeProps<C, ListOptions>;
/**
 * List is used to display list items, it renders a `<ul>` by default.
 */
export declare function List<C extends ElementType = "ul">(props: ListProps<C>): import("solid-js").JSX.Element;
export declare namespace List {
    var toString: () => string;
}
export declare function OrderedList<C extends ElementType = "ol">(props: ListProps<C>): import("solid-js").JSX.Element;
export declare namespace OrderedList {
    var toString: () => string;
}
export declare function UnorderedList<C extends ElementType = "ul">(props: ListProps<C>): import("solid-js").JSX.Element;
export declare namespace UnorderedList {
    var toString: () => string;
}
export {};
//# sourceMappingURL=list.d.ts.map