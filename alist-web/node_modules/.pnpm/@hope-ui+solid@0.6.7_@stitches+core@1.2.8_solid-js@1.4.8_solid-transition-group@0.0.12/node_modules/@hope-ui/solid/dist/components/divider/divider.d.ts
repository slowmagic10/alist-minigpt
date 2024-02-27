import { Property } from "csstype";
import { SizeScaleValue } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
import { DividerVariants } from "./divider.styles";
export interface DividerOptions extends DividerVariants {
    /**
     * The thickness of the divider
     * @example
     * ```jsx
     * <Divider thickness="4px"/>
     * ```
     */
    thickness?: Property.BorderWidth<SizeScaleValue>;
}
export declare type DividerProps<C extends ElementType = "div"> = HTMLHopeProps<C, DividerOptions>;
export declare function Divider<C extends ElementType = "div">(props: DividerProps<C>): import("solid-js").JSX.Element;
export declare namespace Divider {
    var toString: () => string;
}
//# sourceMappingURL=divider.d.ts.map