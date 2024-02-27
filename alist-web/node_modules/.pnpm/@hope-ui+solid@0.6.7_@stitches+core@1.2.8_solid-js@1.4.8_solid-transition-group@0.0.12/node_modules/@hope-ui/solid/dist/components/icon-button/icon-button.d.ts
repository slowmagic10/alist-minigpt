import { JSX } from "solid-js";
import { ButtonOptions } from "../button/button";
import { ElementType, HTMLHopeProps, SinglePartComponentStyleConfig } from "../types";
export interface IconButtonOptions extends Omit<ButtonOptions, "loadingText" | "loaderPlacement" | "leftIcon" | "rightIcon" | "iconSpacing" | "fullWidth"> {
    /**
     * A11y: A label that describes the button
     */
    "aria-label": string;
    /**
     * The icon to be used in the button.
     */
    icon: JSX.Element;
}
export declare type IconButtonStyleConfig = SinglePartComponentStyleConfig<Pick<IconButtonOptions, "variant" | "colorScheme" | "size">>;
export declare type IconButtonProps<C extends ElementType = "button"> = HTMLHopeProps<C, IconButtonOptions>;
/**
 * IconButton composes the Button component except that it renders only an icon.
 * Since IconButton only renders an icon, you must pass the aria-label prop, so screen readers can give meaning to the button.
 */
export declare function IconButton<C extends ElementType = "button">(props: IconButtonProps<C>): JSX.Element;
export declare namespace IconButton {
    var toString: () => string;
}
//# sourceMappingURL=icon-button.d.ts.map