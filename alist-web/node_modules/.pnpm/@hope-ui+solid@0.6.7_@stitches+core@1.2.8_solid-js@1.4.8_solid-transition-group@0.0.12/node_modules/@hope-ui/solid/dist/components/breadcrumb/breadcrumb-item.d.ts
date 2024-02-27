import { ElementType, HTMLHopeProps } from "../types";
export declare type BreadcrumbItemProps<C extends ElementType = "li"> = HTMLHopeProps<C>;
/**
 * BreadcrumbItem is used to group a breadcrumb link and separator.
 * It renders a `li` element to denote it belongs to an order list of links.
 */
export declare function BreadcrumbItem<C extends ElementType = "li">(props: BreadcrumbItemProps<C>): import("solid-js").JSX.Element;
export declare namespace BreadcrumbItem {
    var toString: () => string;
}
//# sourceMappingURL=breadcrumb-item.d.ts.map