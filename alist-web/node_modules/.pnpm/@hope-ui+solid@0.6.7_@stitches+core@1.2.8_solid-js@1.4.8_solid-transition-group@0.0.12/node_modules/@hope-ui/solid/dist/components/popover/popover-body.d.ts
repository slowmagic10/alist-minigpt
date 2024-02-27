import { ElementType, HTMLHopeProps } from "../types";
export declare type PopoverBodyProps<C extends ElementType = "div"> = HTMLHopeProps<C>;
/**
 * PopoverBody is the main content area for the popover.
 * It should contain at least one interactive element.
 */
export declare function PopoverBody<C extends ElementType = "div">(props: PopoverBodyProps<C>): import("solid-js").JSX.Element;
export declare namespace PopoverBody {
    var toString: () => string;
}
//# sourceMappingURL=popover-body.d.ts.map