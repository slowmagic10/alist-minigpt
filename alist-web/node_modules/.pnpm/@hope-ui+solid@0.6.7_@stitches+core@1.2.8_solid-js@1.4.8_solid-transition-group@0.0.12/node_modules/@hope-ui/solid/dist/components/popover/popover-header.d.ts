import { ElementType, HTMLHopeProps } from "../types";
export declare type PopoverHeaderProps<C extends ElementType = "header"> = HTMLHopeProps<C>;
/**
 * PopoverHeader is the accessible header or label
 * for the popover's content and it is first announced by screenreaders.
 */
export declare function PopoverHeader<C extends ElementType = "header">(props: PopoverHeaderProps<C>): import("solid-js").JSX.Element;
export declare namespace PopoverHeader {
    var toString: () => string;
}
//# sourceMappingURL=popover-header.d.ts.map