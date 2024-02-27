import { ElementType, HTMLHopeProps } from "../types";
import { InputAddonVariants } from "./input.styles";
export declare type InputAddonProps<C extends ElementType = "div"> = HTMLHopeProps<C, InputAddonVariants>;
export declare function InputAddon<C extends ElementType = "div">(props: InputAddonProps<C>): import("solid-js").JSX.Element;
export declare type InputLeftAddonProps<C extends ElementType = "div"> = HTMLHopeProps<C>;
export declare function InputLeftAddon<C extends ElementType = "div">(props: InputLeftAddonProps<C>): import("solid-js").JSX.Element;
export declare namespace InputLeftAddon {
    var toString: () => string;
}
export declare type InputRightAddonProps<C extends ElementType = "div"> = HTMLHopeProps<C>;
export declare function InputRightAddon<C extends ElementType = "div">(props: InputRightAddonProps<C>): import("solid-js").JSX.Element;
export declare namespace InputRightAddon {
    var toString: () => string;
}
//# sourceMappingURL=input-addon.d.ts.map