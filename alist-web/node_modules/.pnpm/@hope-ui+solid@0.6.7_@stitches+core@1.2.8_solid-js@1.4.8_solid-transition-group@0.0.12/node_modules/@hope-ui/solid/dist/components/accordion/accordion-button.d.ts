import { JSX } from "solid-js";
import { ElementType, HTMLHopeProps } from "../types";
export declare type AccordionButtonProps<C extends ElementType = "button"> = HTMLHopeProps<C>;
/**
 * AccordionButton is used expands and collapses an accordion item.
 * It must be a child of `AccordionItem`.
 *
 * Note 🚨: Each accordion button must be wrapped in an heading tag,
 * that is appropriate for the information architecture of the page.
 */
export declare function AccordionButton<C extends ElementType = "button">(props: AccordionButtonProps<C>): JSX.Element;
export declare namespace AccordionButton {
    var toString: () => string;
}
//# sourceMappingURL=accordion-button.d.ts.map