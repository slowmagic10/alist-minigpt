import { JSX } from "solid-js";
import { GridLayoutProps } from "../../styled-system/props/grid";
import { ResponsiveValue, SystemStyleObject } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
interface BreadcrumbState {
    /**
     * The space between each item, link and separator.
     */
    spacing: ResponsiveValue<GridLayoutProps["gap"]>;
    /**
     * The visual separator between each breadcrumb item.
     */
    separator: string | JSX.Element;
}
interface BreadcrumbContextValue {
    state: BreadcrumbState;
}
declare type BreadcrumbOptions = Partial<BreadcrumbState>;
declare type ThemeableBreadcrumbOptions = BreadcrumbOptions;
export declare type BreadcrumbProps<C extends ElementType = "nav"> = HTMLHopeProps<C, BreadcrumbOptions>;
export interface BreadcrumbStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        item?: SystemStyleObject;
        link?: SystemStyleObject;
        separator?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableBreadcrumbOptions;
    };
}
/**
 * Breadcrumb is used to render a breadcrumb navigation landmark.
 * It renders a `nav` element with `aria-label` set to `breadcrumb`
 */
export declare function Breadcrumb<C extends ElementType = "nav">(props: BreadcrumbProps<C>): JSX.Element;
export declare namespace Breadcrumb {
    var toString: () => string;
}
export declare function useBreadcrumbContext(): BreadcrumbContextValue;
export {};
//# sourceMappingURL=breadcrumb.d.ts.map