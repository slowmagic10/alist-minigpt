import { Property } from "csstype";
import { ResponsiveProps, SpaceScaleValue } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
export declare type StackOptions = ResponsiveProps<{
    direction?: Property.FlexDirection;
    wrap?: Property.FlexWrap;
    spacing?: Property.Gap<SpaceScaleValue> | number;
}>;
export declare type StackProps<C extends ElementType = "div"> = HTMLHopeProps<C, StackOptions>;
/**
 * Stack is a layout component that makes it easy to stack elements together and apply a space between them.
 *
 * Foundation of <VStack /> and <HStack /> components.
 */
export declare function Stack<C extends ElementType = "div">(props: StackProps<C>): import("solid-js").JSX.Element;
export declare namespace Stack {
    var toString: () => string;
}
export declare type HStackOptions = ResponsiveProps<{
    spacing?: Property.ColumnGap<SpaceScaleValue> | number;
}>;
export declare type HStackProps<C extends ElementType = "div"> = StackProps<C> & HStackOptions;
/**
 * A view that arranges its children in a horizontal line.
 */
export declare function HStack<C extends ElementType = "div">(props: HStackProps<C>): import("solid-js").JSX.Element;
export declare namespace HStack {
    var toString: () => string;
}
export declare type VStackOptions = ResponsiveProps<{
    spacing?: Property.RowGap<SpaceScaleValue> | number;
}>;
export declare type VStackProps<C extends ElementType = "div"> = StackProps<C> & VStackOptions;
/**
 * A view that arranges its children in a vertical line.
 */
export declare function VStack<C extends ElementType = "div">(props: VStackProps<C>): import("solid-js").JSX.Element;
export declare namespace VStack {
    var toString: () => string;
}
//# sourceMappingURL=stack.d.ts.map