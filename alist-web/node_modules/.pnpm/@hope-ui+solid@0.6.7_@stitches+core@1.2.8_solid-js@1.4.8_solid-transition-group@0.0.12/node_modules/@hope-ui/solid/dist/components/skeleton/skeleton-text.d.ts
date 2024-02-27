import { GridLayoutProps } from "../../styled-system/props/grid";
import { SizeProps } from "../../styled-system/props/size";
import { OverrideProps } from "../../utils/types";
import { ElementType } from "../types";
import { SkeletonProps } from "./skeleton";
interface SkeletonTextOptions {
    /**
     * The number of skeleton text lines.
     */
    noOfLines?: number;
    /**
     * The space between each skeleton text line.
     */
    spacing?: GridLayoutProps["gap"];
    /**
     * The height of each skeleton text line.
     */
    skeletonHeight?: SizeProps["height"];
}
export declare type SkeletonTextProps<C extends ElementType = "div"> = OverrideProps<SkeletonProps<C>, SkeletonTextOptions>;
export declare function SkeletonText<C extends ElementType = "div">(props: SkeletonTextProps<C>): import("solid-js").JSX.Element;
export declare namespace SkeletonText {
    var toString: () => string;
}
export {};
//# sourceMappingURL=skeleton-text.d.ts.map