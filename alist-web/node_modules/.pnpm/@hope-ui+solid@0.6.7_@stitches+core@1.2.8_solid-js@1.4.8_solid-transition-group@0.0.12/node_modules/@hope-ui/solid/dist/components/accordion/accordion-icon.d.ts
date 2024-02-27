import { IconProps } from "../icon/icon";
import { ElementType } from "../types";
export declare type AccordionIconProps<C extends ElementType = "svg"> = IconProps<C>;
/**
 * AccordionIcon that gives a visual cue of the open/close state of the accordion item.
 * It rotates `180deg` based on the open/close state.
 */
export declare function AccordionIcon<C extends ElementType = "svg">(props: AccordionIconProps<C>): import("solid-js").JSX.Element;
export declare namespace AccordionIcon {
    var toString: () => string;
}
//# sourceMappingURL=accordion-icon.d.ts.map