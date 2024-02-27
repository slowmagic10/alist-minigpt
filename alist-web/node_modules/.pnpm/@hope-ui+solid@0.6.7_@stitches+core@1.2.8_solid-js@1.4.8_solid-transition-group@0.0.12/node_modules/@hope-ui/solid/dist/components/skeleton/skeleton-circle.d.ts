import { SizeProps } from "../../styled-system/props/size";
import { OverrideProps } from "../../utils/types";
import { ElementType } from "../types";
import { SkeletonProps } from "./skeleton";
interface SkeletonCircleOptions {
    /**
     * The size of the circle.
     */
    size?: SizeProps["boxSize"];
}
export declare type SkeletonCircleProps<C extends ElementType = "div"> = OverrideProps<SkeletonProps<C>, SkeletonCircleOptions>;
export declare function SkeletonCircle<C extends ElementType = "div">(props: SkeletonCircleProps<C>): import("solid-js").JSX.Element;
export declare namespace SkeletonCircle {
    var toString: () => string;
}
export {};
//# sourceMappingURL=skeleton-circle.d.ts.map