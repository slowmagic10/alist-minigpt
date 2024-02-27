import { Property } from "csstype";
import { KeysOf, SizeScaleValue } from "../types";
/**
 * Types for transform CSS properties.
 */
export declare type TransformProps = Partial<{
    /**
     * The CSS `transform` property.
     */
    transform: Property.Transform;
    /**
     * The CSS `transform-origin` property.
     */
    transformOrigin: Property.TransformOrigin<SizeScaleValue> | number;
    /**
     * The CSS `clip-path` property.
     *
     * It creates a clipping region that sets what part of an element should be shown.
     */
    clipPath: Property.ClipPath;
}>;
/**
 * Style prop names for transform CSS related properties.
 */
export declare const transformPropNames: KeysOf<TransformProps>;
//# sourceMappingURL=transform.d.ts.map