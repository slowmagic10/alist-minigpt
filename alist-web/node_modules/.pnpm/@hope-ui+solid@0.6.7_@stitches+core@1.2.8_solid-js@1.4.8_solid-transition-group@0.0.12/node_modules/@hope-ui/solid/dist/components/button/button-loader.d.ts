import { Property } from "csstype";
import { SpaceScaleValue } from "../../styled-system";
import { ElementType, HTMLHopeProps } from "../types";
export declare type ButtonLoaderProps<C extends ElementType = "div"> = HTMLHopeProps<C, {
    withLoadingText?: boolean;
    spacing?: Property.Margin<SpaceScaleValue>;
    placement?: "start" | "end";
}>;
export declare function ButtonLoader<C extends ElementType = "div">(props: ButtonLoaderProps<C>): import("solid-js").JSX.Element;
export declare namespace ButtonLoader {
    var toString: () => string;
}
//# sourceMappingURL=button-loader.d.ts.map