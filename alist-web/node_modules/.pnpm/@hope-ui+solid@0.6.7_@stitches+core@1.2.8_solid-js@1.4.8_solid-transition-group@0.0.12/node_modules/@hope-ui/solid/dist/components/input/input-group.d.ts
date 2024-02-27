import { ElementType, HTMLHopeProps } from "../types";
import { InputVariants } from "./input.styles";
export declare type ThemeableInputGroupOptions = Pick<InputVariants, "variant" | "size">;
export declare type InputGroupState = Required<ThemeableInputGroupOptions> & {
    hasLeftElement: boolean;
    hasRightElement: boolean;
    hasLeftAddon: boolean;
    hasRightAddon: boolean;
};
export interface InputGroupContextValue {
    state: InputGroupState;
    setHasLeftElement: (value: boolean) => void;
    setHasRightElement: (value: boolean) => void;
    setHasLeftAddon: (value: boolean) => void;
    setHasRightAddon: (value: boolean) => void;
}
export declare type InputGroupProps<C extends ElementType = "div"> = HTMLHopeProps<C, ThemeableInputGroupOptions>;
export declare function useInputGroupContext(): InputGroupContextValue | undefined;
export declare function InputGroup<C extends ElementType = "div">(props: InputGroupProps<C>): import("solid-js").JSX.Element;
export declare namespace InputGroup {
    var toString: () => string;
}
//# sourceMappingURL=input-group.d.ts.map