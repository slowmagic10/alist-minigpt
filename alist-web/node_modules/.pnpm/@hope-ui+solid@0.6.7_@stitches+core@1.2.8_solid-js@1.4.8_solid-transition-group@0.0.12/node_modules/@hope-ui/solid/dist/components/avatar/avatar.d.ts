import { JSX } from "solid-js";
import { SystemStyleObject } from "../../styled-system";
import { ImageProps } from "../image";
import { ElementType, HTMLHopeProps } from "../types";
import { AvatarVariants } from "./avatar.styles";
import { ThemeableAvatarGroupOptions } from "./avatar-group";
export interface AvatarIconProps {
    /**
     * The role of the icon.
     */
    role: string;
    /**
     * A11y: A label that describes the icon
     */
    "aria-label": string;
}
interface ThemeableAvatarOptions extends AvatarVariants {
    /**
     * Defines loading strategy.
     */
    loading?: ImageProps["loading"];
    /**
     * If `true`, opt out of the avatar's `fallback` logic and
     * renders the `img` at all times.
     */
    ignoreFallback?: boolean;
    /**
     * The default avatar used as fallback when `name`, and `src` is not specified.
     */
    icon?: (props: AvatarIconProps) => JSX.Element;
    /**
     * `aria-label` to use with the default avatar icon when no `name` is provided.
     */
    iconLabel?: string;
    /**
     * Function to get the initials to display.
     */
    getInitials?: (name: string) => string;
}
export interface AvatarOptions extends ThemeableAvatarOptions {
    /**
     * The name of the person in the avatar.
     * - if `src` has loaded, the name will be used as the `alt` attribute of the `img`
     * - If `src` is not loaded, the name will be used to create the initials
     */
    name?: string;
    /**
     * The image url of the `Avatar`.
     */
    src?: string;
    /**
     * List of sources to use for different screen resolutions.
     */
    srcSet?: string;
    /**
     * Function called when image failed to load.
     */
    onError?: ImageProps["onError"];
    /**
     * Additional props to be passed to the `AvatarImage`.
     */
    imageProps?: ImageProps;
}
export interface AvatarStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        group?: SystemStyleObject;
        image?: SystemStyleObject;
        initials?: SystemStyleObject;
        badge?: SystemStyleObject;
        excess?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableAvatarOptions;
        group?: ThemeableAvatarGroupOptions;
    };
}
export declare type AvatarProps<C extends ElementType = "span"> = HTMLHopeProps<C, AvatarOptions>;
/**
 * Avatar component that renders an user avatar with
 * support for fallback avatar and name-only avatars
 */
export declare function Avatar<C extends ElementType = "span">(props: AvatarProps<C>): JSX.Element;
export declare namespace Avatar {
    var toString: () => string;
}
export {};
//# sourceMappingURL=avatar.d.ts.map