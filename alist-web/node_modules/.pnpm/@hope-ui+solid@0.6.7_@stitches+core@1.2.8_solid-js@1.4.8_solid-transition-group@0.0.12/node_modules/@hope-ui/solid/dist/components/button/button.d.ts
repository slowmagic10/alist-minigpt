import { Property } from "csstype";
import { JSX } from "solid-js";
import { SpaceScaleValue, SystemStyleObject } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
import { ButtonVariants } from "./button.styles";
import { ThemeableButtonGroupOptions } from "./button-group";
export interface ButtonOptions extends ButtonVariants {
    /**
     * If `true`, the button will be disabled.
     */
    disabled?: boolean;
    /**
     * The label to show in the button when `loading` is true
     * If no text is passed, it only shows the loader
     */
    loadingText?: string;
    /**
     * Replace the loader component when `loading` is set to `true`
     */
    loader?: JSX.Element;
    /**
     * It determines the placement of the loader when isLoading is true
     */
    loaderPlacement?: "start" | "end";
    /**
     * The space between the button icon and label.
     */
    iconSpacing?: Property.MarginRight<SpaceScaleValue>;
    /**
     * If added, the button will show an icon before the button's label.
     */
    leftIcon?: JSX.Element;
    /**
     * If added, the button will show an icon after the button's label.
     */
    rightIcon?: JSX.Element;
}
export declare type ThemeableButtonOptions = Pick<ButtonOptions, "variant" | "colorScheme" | "size" | "loaderPlacement">;
export interface ButtonStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        group?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableButtonOptions;
        group?: ThemeableButtonGroupOptions;
    };
}
export declare type ButtonProps<C extends ElementType = "button"> = HTMLHopeProps<C, ButtonOptions>;
export declare const hopeButtonClass = "hope-button";
/**
 * The Button component is used to trigger an action or event,
 * such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 */
export declare function Button<C extends ElementType = "button">(props: ButtonProps<C>): JSX.Element;
export declare namespace Button {
    var toString: () => string;
}
//# sourceMappingURL=button.d.ts.map