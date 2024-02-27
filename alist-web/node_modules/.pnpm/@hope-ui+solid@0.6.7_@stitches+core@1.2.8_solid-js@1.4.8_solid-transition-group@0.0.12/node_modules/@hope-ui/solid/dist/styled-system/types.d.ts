import { CSS, ScaleValue } from "@stitches/core";
import { BorderProps } from "./props/border";
import { ColorProps } from "./props/color";
import { CSSProp } from "./props/css";
import { FlexboxProps } from "./props/flexbox";
import { GridLayoutProps } from "./props/grid";
import { LayoutProps } from "./props/layout";
import { MarginProps } from "./props/margin";
import { PaddingProps } from "./props/padding";
import { PositionProps } from "./props/position";
import { PseudoSelectorProps } from "./props/pseudo-selector";
import { RadiiProps } from "./props/radii";
import { ShadowProps } from "./props/shadow";
import { SizeProps } from "./props/size";
import { TypographyProps } from "./props/typography";
import { baseTheme, config } from "./stitches.config";
import { baseThemeTokens } from "./tokens";
/**
 * Hope UI - Stitches theme interface.
 */
export declare type HopeTheme = typeof baseTheme;
/**
 * Stitches theme config interface.
 */
export declare type StitchesThemeConfig = {
    [Scale in keyof typeof baseThemeTokens]?: {
        [Token in keyof typeof baseThemeTokens[Scale]]?: boolean | number | string;
    };
} & {
    [Scale in keyof typeof baseThemeTokens]?: {
        [Token in string]: boolean | number | string;
    };
} & {
    [Scale in string]: {
        [Token in string]: boolean | number | string;
    };
};
/**
 * Stitches config type.
 */
export declare type SystemConfig = typeof config;
/**
 * Media interface based on the stitches media.
 */
export declare type SystemMedia = typeof config.media;
/**
 * Style interface based on the stitches configuration.
 */
export declare type SystemStyleObject = CSS<SystemConfig>;
/**
 * Stitches config `colors` scale value.
 */
export declare type ColorScaleValue = ScaleValue<"colors", SystemConfig>;
/**
 * Stitches config `space` scale value.
 */
export declare type SpaceScaleValue = ScaleValue<"space", SystemConfig>;
/**
 * Stitches config `sizes` scale value.
 */
export declare type SizeScaleValue = ScaleValue<"sizes", SystemConfig>;
/**
 * Stitches config `fonts` scale value.
 */
export declare type FontScaleValue = ScaleValue<"fonts", SystemConfig>;
/**
 * Stitches config `fontSizes` scale value.
 */
export declare type FontSizeScaleValue = ScaleValue<"fontSizes", SystemConfig>;
/**
 * Stitches config `fontWeights` scale value.
 */
export declare type FontWeightScaleValue = ScaleValue<"fontWeights", SystemConfig>;
/**
 * Stitches config `letterSpacings` scale value.
 */
export declare type LetterSpacingScaleValue = ScaleValue<"letterSpacings", SystemConfig>;
/**
 * Stitches config `lineHeights` scale value.
 */
export declare type LineHeightScaleValue = ScaleValue<"lineHeights", SystemConfig>;
/**
 * Stitches config `radii` scale value.
 */
export declare type RadiiScaleValue = ScaleValue<"radii", SystemConfig>;
/**
 * Stitches config `shadows` scale value.
 */
export declare type ShadowScaleValue = ScaleValue<"shadows", SystemConfig>;
/**
 * Stitches config `zIndices` scale value.
 */
export declare type ZIndiceScaleValue = ScaleValue<"zIndices", SystemConfig>;
/**
 * Utility type to get an object containing all keys of another type
 */
export declare type KeysOf<T> = Record<keyof T, true>;
/**
 * Utility to prefix keys of a type.
 */
export declare type Prefixed<K extends string, T> = `${K}${Extract<T, boolean | number | string>}`;
/**
 * All system media css selectors
 */
export declare type SystemMediaCssSelector = Prefixed<"@", keyof SystemMedia>;
/**
 * All breakpoint css selectors
 */
export declare type BreakpointCssSelector = "@initial" | Exclude<SystemMediaCssSelector, "@reduce-motion" | "@light" | "@dark">;
/**
 * Utility type to convert a given props type to a stitches responsive variant-like type.
 */
export declare type ResponsiveProps<Props> = {
    [K in keyof Props]: Props[K] | {
        [KMedia in "@initial" | SystemMediaCssSelector]?: Props[K];
    };
};
/**
 * Utility type to convert a given value type to a stitches responsive variant-like type.
 */
export declare type ResponsiveValue<T> = T | {
    [KMedia in "@initial" | SystemMediaCssSelector]?: T;
};
/**
 * All style props types.
 */
export declare type StyleProps = ResponsiveProps<BorderProps & ColorProps & FlexboxProps & GridLayoutProps & LayoutProps & MarginProps & PaddingProps & PositionProps & RadiiProps & ShadowProps & SizeProps & TypographyProps & PseudoSelectorProps> & CSSProp;
//# sourceMappingURL=types.d.ts.map