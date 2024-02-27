import { Property } from "csstype";
import { ResponsiveProps } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
export declare type GridOptions = ResponsiveProps<{
    autoFlow?: Property.GridAutoFlow;
    autoColumns?: Property.GridAutoColumns;
    autoRows?: Property.GridAutoRows;
    templateAreas?: Property.GridTemplateAreas;
    templateColumns?: Property.GridTemplateColumns;
    templateRows?: Property.GridTemplateRows;
}>;
export declare type GridProps<C extends ElementType = "div"> = HTMLHopeProps<C, GridOptions>;
/**
 * Hope UI component used to create grid layouts.
 * It renders a `div` with `display: grid` and comes with helpful style shorthand.
 */
export declare function Grid<C extends ElementType = "div">(props: GridProps<C>): import("solid-js").JSX.Element;
export declare namespace Grid {
    var toString: () => string;
}
//# sourceMappingURL=grid.d.ts.map