import { Accessor, PropsWithChildren } from "solid-js";
import { ColorMode } from "./color-mode";
import { ThemeStyleConfig } from "./style-config.types";
import { HopeTheme, StitchesThemeConfig } from "./styled-system/types";
/**
 * Hope UI theme override configuration.
 */
export interface HopeThemeConfig {
    initialColorMode?: ColorMode;
    lightTheme?: StitchesThemeConfig;
    darkTheme?: StitchesThemeConfig;
    components?: ThemeStyleConfig;
}
export interface HopeContextValue {
    components: ThemeStyleConfig;
    theme: Accessor<HopeTheme>;
    colorMode: Accessor<ColorMode>;
    setColorMode: (value: ColorMode) => void;
    toggleColorMode: () => void;
}
export declare const HopeContext: import("solid-js").Context<HopeContextValue | undefined>;
export declare type HopeProviderProps = PropsWithChildren<{
    /**
     * Hope UI theme configuration.
     */
    config?: HopeThemeConfig;
    /**
     * Whether CSS Reset should be applied.
     */
    enableCssReset?: boolean;
}>;
export declare function HopeProvider(props: HopeProviderProps): import("solid-js").JSX.Element;
/**
 * Custom hook that reads from `HopeProvider` context
 * Returns an accessor for the current used theme.
 */
export declare function useTheme(): Accessor<string & {
    className: string;
    selector: string;
} & {
    colors: {
        loContrast: import("@stitches/core/types/theme").Token<"loContrast", string, "colors", "hope">;
        background: import("@stitches/core/types/theme").Token<"background", string, "colors", "hope">;
        focusRing: import("@stitches/core/types/theme").Token<"focusRing", string, "colors", "hope">;
        closeButtonHoverBackground: import("@stitches/core/types/theme").Token<"closeButtonHoverBackground", string, "colors", "hope">;
        closeButtonActiveBackground: import("@stitches/core/types/theme").Token<"closeButtonActiveBackground", string, "colors", "hope">;
        progressStripe: import("@stitches/core/types/theme").Token<"progressStripe", string, "colors", "hope">;
        danger1: import("@stitches/core/types/theme").Token<"danger1", string, "colors", "hope">;
        danger2: import("@stitches/core/types/theme").Token<"danger2", string, "colors", "hope">;
        danger3: import("@stitches/core/types/theme").Token<"danger3", string, "colors", "hope">;
        danger4: import("@stitches/core/types/theme").Token<"danger4", string, "colors", "hope">;
        danger5: import("@stitches/core/types/theme").Token<"danger5", string, "colors", "hope">;
        danger6: import("@stitches/core/types/theme").Token<"danger6", string, "colors", "hope">;
        danger7: import("@stitches/core/types/theme").Token<"danger7", string, "colors", "hope">;
        danger8: import("@stitches/core/types/theme").Token<"danger8", string, "colors", "hope">;
        danger9: import("@stitches/core/types/theme").Token<"danger9", string, "colors", "hope">;
        danger10: import("@stitches/core/types/theme").Token<"danger10", string, "colors", "hope">;
        danger11: import("@stitches/core/types/theme").Token<"danger11", string, "colors", "hope">;
        danger12: import("@stitches/core/types/theme").Token<"danger12", string, "colors", "hope">;
        warning1: import("@stitches/core/types/theme").Token<"warning1", string, "colors", "hope">;
        warning2: import("@stitches/core/types/theme").Token<"warning2", string, "colors", "hope">;
        warning3: import("@stitches/core/types/theme").Token<"warning3", string, "colors", "hope">;
        warning4: import("@stitches/core/types/theme").Token<"warning4", string, "colors", "hope">;
        warning5: import("@stitches/core/types/theme").Token<"warning5", string, "colors", "hope">;
        warning6: import("@stitches/core/types/theme").Token<"warning6", string, "colors", "hope">;
        warning7: import("@stitches/core/types/theme").Token<"warning7", string, "colors", "hope">;
        warning8: import("@stitches/core/types/theme").Token<"warning8", string, "colors", "hope">;
        warning9: import("@stitches/core/types/theme").Token<"warning9", string, "colors", "hope">;
        warning10: import("@stitches/core/types/theme").Token<"warning10", string, "colors", "hope">;
        warning11: import("@stitches/core/types/theme").Token<"warning11", string, "colors", "hope">;
        warning12: import("@stitches/core/types/theme").Token<"warning12", string, "colors", "hope">;
        info1: import("@stitches/core/types/theme").Token<"info1", string, "colors", "hope">;
        info2: import("@stitches/core/types/theme").Token<"info2", string, "colors", "hope">;
        info3: import("@stitches/core/types/theme").Token<"info3", string, "colors", "hope">;
        info4: import("@stitches/core/types/theme").Token<"info4", string, "colors", "hope">;
        info5: import("@stitches/core/types/theme").Token<"info5", string, "colors", "hope">;
        info6: import("@stitches/core/types/theme").Token<"info6", string, "colors", "hope">;
        info7: import("@stitches/core/types/theme").Token<"info7", string, "colors", "hope">;
        info8: import("@stitches/core/types/theme").Token<"info8", string, "colors", "hope">;
        info9: import("@stitches/core/types/theme").Token<"info9", string, "colors", "hope">;
        info10: import("@stitches/core/types/theme").Token<"info10", string, "colors", "hope">;
        info11: import("@stitches/core/types/theme").Token<"info11", string, "colors", "hope">;
        info12: import("@stitches/core/types/theme").Token<"info12", string, "colors", "hope">;
        success1: import("@stitches/core/types/theme").Token<"success1", string, "colors", "hope">;
        success2: import("@stitches/core/types/theme").Token<"success2", string, "colors", "hope">;
        success3: import("@stitches/core/types/theme").Token<"success3", string, "colors", "hope">;
        success4: import("@stitches/core/types/theme").Token<"success4", string, "colors", "hope">;
        success5: import("@stitches/core/types/theme").Token<"success5", string, "colors", "hope">;
        success6: import("@stitches/core/types/theme").Token<"success6", string, "colors", "hope">;
        success7: import("@stitches/core/types/theme").Token<"success7", string, "colors", "hope">;
        success8: import("@stitches/core/types/theme").Token<"success8", string, "colors", "hope">;
        success9: import("@stitches/core/types/theme").Token<"success9", string, "colors", "hope">;
        success10: import("@stitches/core/types/theme").Token<"success10", string, "colors", "hope">;
        success11: import("@stitches/core/types/theme").Token<"success11", string, "colors", "hope">;
        success12: import("@stitches/core/types/theme").Token<"success12", string, "colors", "hope">;
        neutral1: import("@stitches/core/types/theme").Token<"neutral1", string, "colors", "hope">;
        neutral2: import("@stitches/core/types/theme").Token<"neutral2", string, "colors", "hope">;
        neutral3: import("@stitches/core/types/theme").Token<"neutral3", string, "colors", "hope">;
        neutral4: import("@stitches/core/types/theme").Token<"neutral4", string, "colors", "hope">;
        neutral5: import("@stitches/core/types/theme").Token<"neutral5", string, "colors", "hope">;
        neutral6: import("@stitches/core/types/theme").Token<"neutral6", string, "colors", "hope">;
        neutral7: import("@stitches/core/types/theme").Token<"neutral7", string, "colors", "hope">;
        neutral8: import("@stitches/core/types/theme").Token<"neutral8", string, "colors", "hope">;
        neutral9: import("@stitches/core/types/theme").Token<"neutral9", string, "colors", "hope">;
        neutral10: import("@stitches/core/types/theme").Token<"neutral10", string, "colors", "hope">;
        neutral11: import("@stitches/core/types/theme").Token<"neutral11", string, "colors", "hope">;
        neutral12: import("@stitches/core/types/theme").Token<"neutral12", string, "colors", "hope">;
        accent1: import("@stitches/core/types/theme").Token<"accent1", string, "colors", "hope">;
        accent2: import("@stitches/core/types/theme").Token<"accent2", string, "colors", "hope">;
        accent3: import("@stitches/core/types/theme").Token<"accent3", string, "colors", "hope">;
        accent4: import("@stitches/core/types/theme").Token<"accent4", string, "colors", "hope">;
        accent5: import("@stitches/core/types/theme").Token<"accent5", string, "colors", "hope">;
        accent6: import("@stitches/core/types/theme").Token<"accent6", string, "colors", "hope">;
        accent7: import("@stitches/core/types/theme").Token<"accent7", string, "colors", "hope">;
        accent8: import("@stitches/core/types/theme").Token<"accent8", string, "colors", "hope">;
        accent9: import("@stitches/core/types/theme").Token<"accent9", string, "colors", "hope">;
        accent10: import("@stitches/core/types/theme").Token<"accent10", string, "colors", "hope">;
        accent11: import("@stitches/core/types/theme").Token<"accent11", string, "colors", "hope">;
        accent12: import("@stitches/core/types/theme").Token<"accent12", string, "colors", "hope">;
        primary1: import("@stitches/core/types/theme").Token<"primary1", string, "colors", "hope">;
        primary2: import("@stitches/core/types/theme").Token<"primary2", string, "colors", "hope">;
        primary3: import("@stitches/core/types/theme").Token<"primary3", string, "colors", "hope">;
        primary4: import("@stitches/core/types/theme").Token<"primary4", string, "colors", "hope">;
        primary5: import("@stitches/core/types/theme").Token<"primary5", string, "colors", "hope">;
        primary6: import("@stitches/core/types/theme").Token<"primary6", string, "colors", "hope">;
        primary7: import("@stitches/core/types/theme").Token<"primary7", string, "colors", "hope">;
        primary8: import("@stitches/core/types/theme").Token<"primary8", string, "colors", "hope">;
        primary9: import("@stitches/core/types/theme").Token<"primary9", string, "colors", "hope">;
        primary10: import("@stitches/core/types/theme").Token<"primary10", string, "colors", "hope">;
        primary11: import("@stitches/core/types/theme").Token<"primary11", string, "colors", "hope">;
        primary12: import("@stitches/core/types/theme").Token<"primary12", string, "colors", "hope">;
        whiteAlpha1: import("@stitches/core/types/theme").Token<"whiteAlpha1", string, "colors", "hope">;
        whiteAlpha2: import("@stitches/core/types/theme").Token<"whiteAlpha2", string, "colors", "hope">;
        whiteAlpha3: import("@stitches/core/types/theme").Token<"whiteAlpha3", string, "colors", "hope">;
        whiteAlpha4: import("@stitches/core/types/theme").Token<"whiteAlpha4", string, "colors", "hope">;
        whiteAlpha5: import("@stitches/core/types/theme").Token<"whiteAlpha5", string, "colors", "hope">;
        whiteAlpha6: import("@stitches/core/types/theme").Token<"whiteAlpha6", string, "colors", "hope">;
        whiteAlpha7: import("@stitches/core/types/theme").Token<"whiteAlpha7", string, "colors", "hope">;
        whiteAlpha8: import("@stitches/core/types/theme").Token<"whiteAlpha8", string, "colors", "hope">;
        whiteAlpha9: import("@stitches/core/types/theme").Token<"whiteAlpha9", string, "colors", "hope">;
        whiteAlpha10: import("@stitches/core/types/theme").Token<"whiteAlpha10", string, "colors", "hope">;
        whiteAlpha11: import("@stitches/core/types/theme").Token<"whiteAlpha11", string, "colors", "hope">;
        whiteAlpha12: import("@stitches/core/types/theme").Token<"whiteAlpha12", string, "colors", "hope">;
        blackAlpha1: import("@stitches/core/types/theme").Token<"blackAlpha1", string, "colors", "hope">;
        blackAlpha2: import("@stitches/core/types/theme").Token<"blackAlpha2", string, "colors", "hope">;
        blackAlpha3: import("@stitches/core/types/theme").Token<"blackAlpha3", string, "colors", "hope">;
        blackAlpha4: import("@stitches/core/types/theme").Token<"blackAlpha4", string, "colors", "hope">;
        blackAlpha5: import("@stitches/core/types/theme").Token<"blackAlpha5", string, "colors", "hope">;
        blackAlpha6: import("@stitches/core/types/theme").Token<"blackAlpha6", string, "colors", "hope">;
        blackAlpha7: import("@stitches/core/types/theme").Token<"blackAlpha7", string, "colors", "hope">;
        blackAlpha8: import("@stitches/core/types/theme").Token<"blackAlpha8", string, "colors", "hope">;
        blackAlpha9: import("@stitches/core/types/theme").Token<"blackAlpha9", string, "colors", "hope">;
        blackAlpha10: import("@stitches/core/types/theme").Token<"blackAlpha10", string, "colors", "hope">;
        blackAlpha11: import("@stitches/core/types/theme").Token<"blackAlpha11", string, "colors", "hope">;
        blackAlpha12: import("@stitches/core/types/theme").Token<"blackAlpha12", string, "colors", "hope">;
    };
    space: {
        px: import("@stitches/core/types/theme").Token<"px", string, "space", "hope">;
        "0_5": import("@stitches/core/types/theme").Token<"0_5", string, "space", "hope">;
        1: import("@stitches/core/types/theme").Token<"1", string, "space", "hope">;
        "1_5": import("@stitches/core/types/theme").Token<"1_5", string, "space", "hope">;
        2: import("@stitches/core/types/theme").Token<"2", string, "space", "hope">;
        "2_5": import("@stitches/core/types/theme").Token<"2_5", string, "space", "hope">;
        3: import("@stitches/core/types/theme").Token<"3", string, "space", "hope">;
        "3_5": import("@stitches/core/types/theme").Token<"3_5", string, "space", "hope">;
        4: import("@stitches/core/types/theme").Token<"4", string, "space", "hope">;
        5: import("@stitches/core/types/theme").Token<"5", string, "space", "hope">;
        6: import("@stitches/core/types/theme").Token<"6", string, "space", "hope">;
        7: import("@stitches/core/types/theme").Token<"7", string, "space", "hope">;
        8: import("@stitches/core/types/theme").Token<"8", string, "space", "hope">;
        9: import("@stitches/core/types/theme").Token<"9", string, "space", "hope">;
        10: import("@stitches/core/types/theme").Token<"10", string, "space", "hope">;
        12: import("@stitches/core/types/theme").Token<"12", string, "space", "hope">;
        14: import("@stitches/core/types/theme").Token<"14", string, "space", "hope">;
        16: import("@stitches/core/types/theme").Token<"16", string, "space", "hope">;
        20: import("@stitches/core/types/theme").Token<"20", string, "space", "hope">;
        24: import("@stitches/core/types/theme").Token<"24", string, "space", "hope">;
        28: import("@stitches/core/types/theme").Token<"28", string, "space", "hope">;
        32: import("@stitches/core/types/theme").Token<"32", string, "space", "hope">;
        36: import("@stitches/core/types/theme").Token<"36", string, "space", "hope">;
        40: import("@stitches/core/types/theme").Token<"40", string, "space", "hope">;
        44: import("@stitches/core/types/theme").Token<"44", string, "space", "hope">;
        48: import("@stitches/core/types/theme").Token<"48", string, "space", "hope">;
        52: import("@stitches/core/types/theme").Token<"52", string, "space", "hope">;
        56: import("@stitches/core/types/theme").Token<"56", string, "space", "hope">;
        60: import("@stitches/core/types/theme").Token<"60", string, "space", "hope">;
        64: import("@stitches/core/types/theme").Token<"64", string, "space", "hope">;
        72: import("@stitches/core/types/theme").Token<"72", string, "space", "hope">;
        80: import("@stitches/core/types/theme").Token<"80", string, "space", "hope">;
        96: import("@stitches/core/types/theme").Token<"96", string, "space", "hope">;
    };
    sizes: {
        prose: import("@stitches/core/types/theme").Token<"prose", string, "sizes", "hope">;
        max: import("@stitches/core/types/theme").Token<"max", string, "sizes", "hope">;
        min: import("@stitches/core/types/theme").Token<"min", string, "sizes", "hope">;
        full: import("@stitches/core/types/theme").Token<"full", string, "sizes", "hope">;
        screenW: import("@stitches/core/types/theme").Token<"screenW", string, "sizes", "hope">;
        screenH: import("@stitches/core/types/theme").Token<"screenH", string, "sizes", "hope">;
        xs: import("@stitches/core/types/theme").Token<"xs", string, "sizes", "hope">;
        sm: import("@stitches/core/types/theme").Token<"sm", string, "sizes", "hope">;
        md: import("@stitches/core/types/theme").Token<"md", string, "sizes", "hope">;
        lg: import("@stitches/core/types/theme").Token<"lg", string, "sizes", "hope">;
        xl: import("@stitches/core/types/theme").Token<"xl", string, "sizes", "hope">;
        "2xl": import("@stitches/core/types/theme").Token<"2xl", string, "sizes", "hope">;
        "3xl": import("@stitches/core/types/theme").Token<"3xl", string, "sizes", "hope">;
        "4xl": import("@stitches/core/types/theme").Token<"4xl", string, "sizes", "hope">;
        "5xl": import("@stitches/core/types/theme").Token<"5xl", string, "sizes", "hope">;
        "6xl": import("@stitches/core/types/theme").Token<"6xl", string, "sizes", "hope">;
        "7xl": import("@stitches/core/types/theme").Token<"7xl", string, "sizes", "hope">;
        "8xl": import("@stitches/core/types/theme").Token<"8xl", string, "sizes", "hope">;
        containerSm: import("@stitches/core/types/theme").Token<"containerSm", string, "sizes", "hope">;
        containerMd: import("@stitches/core/types/theme").Token<"containerMd", string, "sizes", "hope">;
        containerLg: import("@stitches/core/types/theme").Token<"containerLg", string, "sizes", "hope">;
        containerXl: import("@stitches/core/types/theme").Token<"containerXl", string, "sizes", "hope">;
        container2xl: import("@stitches/core/types/theme").Token<"container2xl", string, "sizes", "hope">;
        px: import("@stitches/core/types/theme").Token<"px", string, "sizes", "hope">;
        "0_5": import("@stitches/core/types/theme").Token<"0_5", string, "sizes", "hope">;
        1: import("@stitches/core/types/theme").Token<"1", string, "sizes", "hope">;
        "1_5": import("@stitches/core/types/theme").Token<"1_5", string, "sizes", "hope">;
        2: import("@stitches/core/types/theme").Token<"2", string, "sizes", "hope">;
        "2_5": import("@stitches/core/types/theme").Token<"2_5", string, "sizes", "hope">;
        3: import("@stitches/core/types/theme").Token<"3", string, "sizes", "hope">;
        "3_5": import("@stitches/core/types/theme").Token<"3_5", string, "sizes", "hope">;
        4: import("@stitches/core/types/theme").Token<"4", string, "sizes", "hope">;
        5: import("@stitches/core/types/theme").Token<"5", string, "sizes", "hope">;
        6: import("@stitches/core/types/theme").Token<"6", string, "sizes", "hope">;
        7: import("@stitches/core/types/theme").Token<"7", string, "sizes", "hope">;
        8: import("@stitches/core/types/theme").Token<"8", string, "sizes", "hope">;
        9: import("@stitches/core/types/theme").Token<"9", string, "sizes", "hope">;
        10: import("@stitches/core/types/theme").Token<"10", string, "sizes", "hope">;
        12: import("@stitches/core/types/theme").Token<"12", string, "sizes", "hope">;
        14: import("@stitches/core/types/theme").Token<"14", string, "sizes", "hope">;
        16: import("@stitches/core/types/theme").Token<"16", string, "sizes", "hope">;
        20: import("@stitches/core/types/theme").Token<"20", string, "sizes", "hope">;
        24: import("@stitches/core/types/theme").Token<"24", string, "sizes", "hope">;
        28: import("@stitches/core/types/theme").Token<"28", string, "sizes", "hope">;
        32: import("@stitches/core/types/theme").Token<"32", string, "sizes", "hope">;
        36: import("@stitches/core/types/theme").Token<"36", string, "sizes", "hope">;
        40: import("@stitches/core/types/theme").Token<"40", string, "sizes", "hope">;
        44: import("@stitches/core/types/theme").Token<"44", string, "sizes", "hope">;
        48: import("@stitches/core/types/theme").Token<"48", string, "sizes", "hope">;
        52: import("@stitches/core/types/theme").Token<"52", string, "sizes", "hope">;
        56: import("@stitches/core/types/theme").Token<"56", string, "sizes", "hope">;
        60: import("@stitches/core/types/theme").Token<"60", string, "sizes", "hope">;
        64: import("@stitches/core/types/theme").Token<"64", string, "sizes", "hope">;
        72: import("@stitches/core/types/theme").Token<"72", string, "sizes", "hope">;
        80: import("@stitches/core/types/theme").Token<"80", string, "sizes", "hope">;
        96: import("@stitches/core/types/theme").Token<"96", string, "sizes", "hope">;
    };
    fonts: {
        sans: import("@stitches/core/types/theme").Token<"sans", string, "fonts", "hope">;
        serif: import("@stitches/core/types/theme").Token<"serif", string, "fonts", "hope">;
        mono: import("@stitches/core/types/theme").Token<"mono", string, "fonts", "hope">;
    };
    fontSizes: {
        "2xs": import("@stitches/core/types/theme").Token<"2xs", string, "fontSizes", "hope">;
        xs: import("@stitches/core/types/theme").Token<"xs", string, "fontSizes", "hope">;
        sm: import("@stitches/core/types/theme").Token<"sm", string, "fontSizes", "hope">;
        base: import("@stitches/core/types/theme").Token<"base", string, "fontSizes", "hope">;
        lg: import("@stitches/core/types/theme").Token<"lg", string, "fontSizes", "hope">;
        xl: import("@stitches/core/types/theme").Token<"xl", string, "fontSizes", "hope">;
        "2xl": import("@stitches/core/types/theme").Token<"2xl", string, "fontSizes", "hope">;
        "3xl": import("@stitches/core/types/theme").Token<"3xl", string, "fontSizes", "hope">;
        "4xl": import("@stitches/core/types/theme").Token<"4xl", string, "fontSizes", "hope">;
        "5xl": import("@stitches/core/types/theme").Token<"5xl", string, "fontSizes", "hope">;
        "6xl": import("@stitches/core/types/theme").Token<"6xl", string, "fontSizes", "hope">;
        "7xl": import("@stitches/core/types/theme").Token<"7xl", string, "fontSizes", "hope">;
        "8xl": import("@stitches/core/types/theme").Token<"8xl", string, "fontSizes", "hope">;
        "9xl": import("@stitches/core/types/theme").Token<"9xl", string, "fontSizes", "hope">;
    };
    fontWeights: {
        hairline: import("@stitches/core/types/theme").Token<"hairline", string, "fontWeights", "hope">;
        thin: import("@stitches/core/types/theme").Token<"thin", string, "fontWeights", "hope">;
        light: import("@stitches/core/types/theme").Token<"light", string, "fontWeights", "hope">;
        normal: import("@stitches/core/types/theme").Token<"normal", string, "fontWeights", "hope">;
        medium: import("@stitches/core/types/theme").Token<"medium", string, "fontWeights", "hope">;
        semibold: import("@stitches/core/types/theme").Token<"semibold", string, "fontWeights", "hope">;
        bold: import("@stitches/core/types/theme").Token<"bold", string, "fontWeights", "hope">;
        extrabold: import("@stitches/core/types/theme").Token<"extrabold", string, "fontWeights", "hope">;
        black: import("@stitches/core/types/theme").Token<"black", string, "fontWeights", "hope">;
    };
    letterSpacings: {
        tighter: import("@stitches/core/types/theme").Token<"tighter", string, "letterSpacings", "hope">;
        tight: import("@stitches/core/types/theme").Token<"tight", string, "letterSpacings", "hope">;
        normal: import("@stitches/core/types/theme").Token<"normal", string, "letterSpacings", "hope">;
        wide: import("@stitches/core/types/theme").Token<"wide", string, "letterSpacings", "hope">;
        wider: import("@stitches/core/types/theme").Token<"wider", string, "letterSpacings", "hope">;
        widest: import("@stitches/core/types/theme").Token<"widest", string, "letterSpacings", "hope">;
    };
    lineHeights: {
        normal: import("@stitches/core/types/theme").Token<"normal", string, "lineHeights", "hope">;
        none: import("@stitches/core/types/theme").Token<"none", string, "lineHeights", "hope">;
        shorter: import("@stitches/core/types/theme").Token<"shorter", string, "lineHeights", "hope">;
        short: import("@stitches/core/types/theme").Token<"short", string, "lineHeights", "hope">;
        base: import("@stitches/core/types/theme").Token<"base", string, "lineHeights", "hope">;
        tall: import("@stitches/core/types/theme").Token<"tall", string, "lineHeights", "hope">;
        taller: import("@stitches/core/types/theme").Token<"taller", string, "lineHeights", "hope">;
        3: import("@stitches/core/types/theme").Token<"3", string, "lineHeights", "hope">;
        4: import("@stitches/core/types/theme").Token<"4", string, "lineHeights", "hope">;
        5: import("@stitches/core/types/theme").Token<"5", string, "lineHeights", "hope">;
        6: import("@stitches/core/types/theme").Token<"6", string, "lineHeights", "hope">;
        7: import("@stitches/core/types/theme").Token<"7", string, "lineHeights", "hope">;
        8: import("@stitches/core/types/theme").Token<"8", string, "lineHeights", "hope">;
        9: import("@stitches/core/types/theme").Token<"9", string, "lineHeights", "hope">;
        10: import("@stitches/core/types/theme").Token<"10", string, "lineHeights", "hope">;
    };
    radii: {
        none: import("@stitches/core/types/theme").Token<"none", string, "radii", "hope">;
        xs: import("@stitches/core/types/theme").Token<"xs", string, "radii", "hope">;
        sm: import("@stitches/core/types/theme").Token<"sm", string, "radii", "hope">;
        md: import("@stitches/core/types/theme").Token<"md", string, "radii", "hope">;
        lg: import("@stitches/core/types/theme").Token<"lg", string, "radii", "hope">;
        xl: import("@stitches/core/types/theme").Token<"xl", string, "radii", "hope">;
        "2xl": import("@stitches/core/types/theme").Token<"2xl", string, "radii", "hope">;
        "3xl": import("@stitches/core/types/theme").Token<"3xl", string, "radii", "hope">;
        full: import("@stitches/core/types/theme").Token<"full", string, "radii", "hope">;
    };
    shadows: {
        none: import("@stitches/core/types/theme").Token<"none", string, "shadows", "hope">;
        xs: import("@stitches/core/types/theme").Token<"xs", string, "shadows", "hope">;
        sm: import("@stitches/core/types/theme").Token<"sm", string, "shadows", "hope">;
        md: import("@stitches/core/types/theme").Token<"md", string, "shadows", "hope">;
        lg: import("@stitches/core/types/theme").Token<"lg", string, "shadows", "hope">;
        xl: import("@stitches/core/types/theme").Token<"xl", string, "shadows", "hope">;
        "2xl": import("@stitches/core/types/theme").Token<"2xl", string, "shadows", "hope">;
        inner: import("@stitches/core/types/theme").Token<"inner", string, "shadows", "hope">;
        outline: import("@stitches/core/types/theme").Token<"outline", string, "shadows", "hope">;
    };
    zIndices: {
        hide: import("@stitches/core/types/theme").Token<"hide", string, "zIndices", "hope">;
        auto: import("@stitches/core/types/theme").Token<"auto", string, "zIndices", "hope">;
        base: import("@stitches/core/types/theme").Token<"base", string, "zIndices", "hope">;
        docked: import("@stitches/core/types/theme").Token<"docked", string, "zIndices", "hope">;
        sticky: import("@stitches/core/types/theme").Token<"sticky", string, "zIndices", "hope">;
        banner: import("@stitches/core/types/theme").Token<"banner", string, "zIndices", "hope">;
        overlay: import("@stitches/core/types/theme").Token<"overlay", string, "zIndices", "hope">;
        modal: import("@stitches/core/types/theme").Token<"modal", string, "zIndices", "hope">;
        dropdown: import("@stitches/core/types/theme").Token<"dropdown", string, "zIndices", "hope">;
        popover: import("@stitches/core/types/theme").Token<"popover", string, "zIndices", "hope">;
        tooltip: import("@stitches/core/types/theme").Token<"tooltip", string, "zIndices", "hope">;
        skipLink: import("@stitches/core/types/theme").Token<"skipLink", string, "zIndices", "hope">;
        notification: import("@stitches/core/types/theme").Token<"notification", string, "zIndices", "hope">;
    };
}>;
/**
 * Custom hook that reads from `HopeProvider` context
 * Returns an accessor for the theme based components style config.
 */
export declare function useStyleConfig(): ThemeStyleConfig;
/**
 * Custom hook that reads from `HopeProvider` context
 * Returns an accessor for the color mode and function to toggle it
 */
export declare function useColorMode(): Pick<HopeContextValue, "colorMode" | "setColorMode" | "toggleColorMode">;
/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 * @return A derived signal based on the color mode.
 */
export declare function useColorModeValue<T = any>(light: T, dark: T): () => T;
//# sourceMappingURL=hope-provider.d.ts.map