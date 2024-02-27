export declare type ColorMode = "light" | "dark" | "system";
/**
 * Theme CSS class name added to `document.body` based on color mode.
 */
export declare const colorModeClassNames: {
    light: string;
    dark: string;
};
export declare function saveColorModeToLocalStorage(value: ColorMode): void;
/**
 * Get the default color mode based on system preference or from local storage.
 * @param fallbackValue Fallback color mode value, if `system` it will be the system color mode.
 * @returns The default color mode to use.
 */
export declare function getDefaultColorMode(fallbackValue: ColorMode): ColorMode;
/**
 * Returns the theme class to apply based on color mode.
 */
export declare function getColorModeClassName(isDark: boolean): string;
/**
 * Toggle the theme class from `document.body` based on color mode.
 */
export declare function syncBodyColorModeClassName(isDark: boolean): void;
//# sourceMappingURL=color-mode.d.ts.map