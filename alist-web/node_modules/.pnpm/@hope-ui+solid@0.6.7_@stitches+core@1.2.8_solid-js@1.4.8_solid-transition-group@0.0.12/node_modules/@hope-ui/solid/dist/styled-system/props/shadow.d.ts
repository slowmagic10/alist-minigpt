import { Property } from "csstype";
import { KeysOf, ShadowScaleValue } from "../types";
/**
 * Types for shadow CSS properties
 */
export declare type ShadowProps = Partial<{
    /**
     * The CSS `text-shadow` property
     */
    textShadow: Property.TextShadow | ShadowScaleValue;
    /**
     * The CSS `box-shadow` property
     */
    boxShadow: Property.BoxShadow | ShadowScaleValue;
    /**
     * The CSS `box-shadow` property
     */
    shadow: Property.BoxShadow | ShadowScaleValue;
}>;
/**
 * Style prop names for shadows properties
 */
export declare const shadowPropNames: KeysOf<ShadowProps>;
//# sourceMappingURL=shadow.d.ts.map