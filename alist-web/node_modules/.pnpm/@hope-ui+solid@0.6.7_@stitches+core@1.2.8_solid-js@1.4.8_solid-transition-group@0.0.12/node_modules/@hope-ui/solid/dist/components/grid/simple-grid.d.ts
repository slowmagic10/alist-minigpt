import { Property } from "csstype";
import { ResponsiveValue, SizeScaleValue } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
import { GridOptions } from "./grid";
export interface SimpleGridOptions extends GridOptions {
    /**
     * The width at which child elements will break into columns.
     * Pass a number for pixel values or a string for any other valid CSS length.
     */
    minChildWidth?: ResponsiveValue<Property.MinWidth<SizeScaleValue> | number>;
    /**
     * The number of columns
     */
    columns?: ResponsiveValue<number>;
}
export declare type SimpleGridProps<C extends ElementType = "div"> = HTMLHopeProps<C, SimpleGridOptions>;
/**
 * SimpleGrid make its easy to create responsive grid layouts.
 */
export declare function SimpleGrid<C extends ElementType = "div">(props: SimpleGridProps<C>): import("solid-js").JSX.Element;
export declare namespace SimpleGrid {
    var toString: () => string;
}
//# sourceMappingURL=simple-grid.d.ts.map