import { ElementType, HTMLHopeProps } from "../types";
import { InputElementVariants } from "./input.styles";
export declare type InputElementProps<C extends ElementType = "div"> = HTMLHopeProps<C, InputElementVariants>;
export declare function InputElement<C extends ElementType = "div">(props: InputElementProps<C>): import("solid-js").JSX.Element;
export declare type InputLeftElementProps<C extends ElementType = "div"> = HTMLHopeProps<C>;
export declare function InputLeftElement<C extends ElementType = "div">(props: InputLeftElementProps<C>): import("solid-js").JSX.Element;
export declare namespace InputLeftElement {
    var toString: () => string;
}
export declare type InputRightElementProps<C extends ElementType = "div"> = HTMLHopeProps<C>;
export declare function InputRightElement<C extends ElementType = "div">(props: InputRightElementProps<C>): import("solid-js").JSX.Element;
export declare namespace InputRightElement {
    var toString: () => string;
}
//# sourceMappingURL=input-element.d.ts.map