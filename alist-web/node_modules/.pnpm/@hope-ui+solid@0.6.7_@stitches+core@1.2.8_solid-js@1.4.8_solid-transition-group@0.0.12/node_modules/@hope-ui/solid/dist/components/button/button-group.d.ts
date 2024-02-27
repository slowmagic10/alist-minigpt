import { MarginProps } from "../../styled-system/props/margin";
import { ElementType, HTMLHopeProps } from "../types";
import { ButtonOptions } from "./button";
interface ButtonGroupOptions extends Pick<ButtonOptions, "variant" | "colorScheme" | "size"> {
    /**
     * If `true`, the borderRadius of button that are direct children will be altered
     * to look flushed together.
     */
    attached?: boolean;
    /**
     * The spacing between each buttons.
     */
    spacing?: MarginProps["marginRight"];
    /**
     * If `true`, all wrapped button will be disabled.
     */
    disabled?: boolean;
}
export declare type ThemeableButtonGroupOptions = Omit<ButtonGroupOptions, "disabled">;
export declare type ButtonGroupProps<C extends ElementType = "div"> = HTMLHopeProps<C, ButtonGroupOptions>;
declare type ButtonGroupState = Pick<ButtonGroupProps, "variant" | "colorScheme" | "size" | "disabled">;
interface ButtonGroupContextValue {
    state: ButtonGroupState;
}
export declare function ButtonGroup<C extends ElementType = "div">(props: ButtonGroupProps<C>): import("solid-js").JSX.Element;
export declare namespace ButtonGroup {
    var toString: () => string;
}
export declare function useButtonGroupContext(): ButtonGroupContextValue | undefined;
export {};
//# sourceMappingURL=button-group.d.ts.map