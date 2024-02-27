import { Property } from "csstype";
import { JSX } from "solid-js";
import { OverrideProps } from "../../utils/types";
import { ElementType, HTMLHopeProps } from "../types";
import { CreateImageLoadingStatusProps } from "./image.utils";
interface ImageOptions {
    /**
     * The native HTML `width` attribute to the passed to the `img`
     */
    htmlWidth?: string | number;
    /**
     * The native HTML `height` attribute to the passed to the `img`
     */
    htmlHeight?: string | number;
    /**
     * Fallback image `src` to show if image is loading or image fails.
     *
     * Note 🚨: We recommend you use a local image.
     */
    fallbackSrc?: string;
    /**
     * Fallback element to show if image is loading or image fails.
     */
    fallback?: JSX.Element;
    /**
     * The image loading strategy.
     */
    loading?: "eager" | "lazy";
    /**
     * How the image to fit within its bounds.
     * It maps to css `object-fit` property.
     */
    fit?: Property.ObjectFit;
    /**
     * How to align the image within its bounds.
     * It maps to css `object-position` property.
     */
    align?: Property.ObjectPosition;
    /**
     * If `true`, opt out of the `fallbackSrc` logic and use as `img`.
     */
    ignoreFallback?: boolean;
}
export declare type ImageProps<C extends ElementType = "img"> = OverrideProps<HTMLHopeProps<C, ImageOptions>, CreateImageLoadingStatusProps>;
/**
 * Image renders an image with support for fallbacks
 */
export declare function Image<C extends ElementType = "img">(props: ImageProps<C>): JSX.Element;
export declare namespace Image {
    var toString: () => string;
}
export {};
//# sourceMappingURL=image.d.ts.map