import { SystemStyleObject } from "../../styled-system/types";
import { HTMLHopeProps } from "../types";
import { InputVariants } from "./input.styles";
import { ThemeableInputGroupOptions } from "./input-group";
declare type ThemeableInputOptions = Pick<InputVariants, "variant" | "size">;
interface InputOptions extends ThemeableInputOptions {
    /**
     * If `true`, the input will have `aria-invalid` set to `true`.
     */
    invalid?: boolean;
    /**
     * The native HTML `size` attribute to be passed to the `input`.
     */
    htmlSize?: string | number;
}
export declare type InputProps = Omit<HTMLHopeProps<"input", InputOptions>, "as">;
export interface InputStyleConfig {
    baseStyle?: {
        input?: SystemStyleObject;
        group?: SystemStyleObject;
        element?: SystemStyleObject;
        addon?: SystemStyleObject;
    };
    defaultProps?: {
        input?: ThemeableInputOptions;
        group?: ThemeableInputGroupOptions;
    };
}
export declare function Input(props: InputProps): import("solid-js").JSX.Element;
export declare namespace Input {
    var toString: () => string;
}
export {};
//# sourceMappingURL=input.d.ts.map