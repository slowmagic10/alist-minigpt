import { ElementType, HTMLHopeProps } from "../types";
export interface BreadcrumbLinkOptions {
    currentPage?: boolean;
}
export declare type BreadcrumbLinkProps<C extends ElementType = "a"> = HTMLHopeProps<C, BreadcrumbLinkOptions>;
/**
 * Breadcrumb link.
 *
 * It renders a `span` when it matches the current link.
 * Otherwise, it renders an anchor tag.
 */
export declare function BreadcrumbLink<C extends ElementType = "a">(props: BreadcrumbLinkProps<C>): import("solid-js").JSX.Element;
export declare namespace BreadcrumbLink {
    var toString: () => string;
}
//# sourceMappingURL=breadcrumb-link.d.ts.map