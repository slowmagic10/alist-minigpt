import { JSX } from "solid-js";
import { ElementType, HTMLHopeProps, SinglePartComponentStyleConfig } from "../types";
import { CloseButtonVariants } from "./close-button.styles";
export interface ThemeableCloseButtonOptions extends CloseButtonVariants {
    /**
     * A11y: A label that describes the button
     */
    "aria-label"?: string;
    /**
     * The icon to be used in the button.
     */
    icon?: JSX.Element;
}
export declare type CloseButtonProps<C extends ElementType = "button"> = HTMLHopeProps<C, ThemeableCloseButtonOptions>;
export declare type CloseButtonStyleConfig = SinglePartComponentStyleConfig<ThemeableCloseButtonOptions>;
/**
 * A button with a close icon.
 *
 * It is used to handle the close functionality in feedback and overlay components
 * like Alerts, Toasts, Drawers and Modals.
 */
export declare function CloseButton<C extends ElementType = "button">(props: CloseButtonProps<C>): JSX.Element;
export declare namespace CloseButton {
    var toString: () => string;
}
//# sourceMappingURL=close-button.d.ts.map