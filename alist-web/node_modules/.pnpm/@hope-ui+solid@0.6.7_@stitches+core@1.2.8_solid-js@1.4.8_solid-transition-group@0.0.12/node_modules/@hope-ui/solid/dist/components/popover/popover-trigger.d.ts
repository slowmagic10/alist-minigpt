import { JSX } from "solid-js";
import { ElementType, HTMLHopeProps } from "../types";
export declare type PopoverTriggerProps<C extends ElementType = "button"> = HTMLHopeProps<C>;
/**
 * PopoverTrigger opens the popover's content.
 * It must be an interactive element.
 * It renders a `button` by edfault.
 */
export declare function PopoverTrigger<C extends ElementType = "button">(props: PopoverTriggerProps<C>): JSX.Element;
//# sourceMappingURL=popover-trigger.d.ts.map