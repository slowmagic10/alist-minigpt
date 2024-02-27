import { BorderProps } from "../../styled-system/props/border";
import { MarginProps } from "../../styled-system/props/margin";
import { RadiiProps } from "../../styled-system/props/radii";
import { ResponsiveValue } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
import { AvatarVariants } from "./avatar.styles";
export interface ThemeableAvatarGroupOptions {
    /**
     * The size of the avatars.
     */
    size?: AvatarVariants["size"];
    /**
     * The space between the avatars in the group.
     */
    spacing?: ResponsiveValue<MarginProps["margin"]>;
    /**
     * The `border-radius` of the avatars
     */
    avatarBorderRadius?: ResponsiveValue<RadiiProps["borderRadius"]>;
    /**
     * The `border-color` of the avatars
     */
    avatarBorderColor?: ResponsiveValue<BorderProps["borderColor"]>;
    /**
     * The `border-width` of the avatars
     */
    avatarBorderWidth?: ResponsiveValue<BorderProps["borderWidth"]>;
}
declare type AvatarGroupOptions = ThemeableAvatarGroupOptions;
export declare type AvatarGroupProps<C extends ElementType = "div"> = HTMLHopeProps<C, AvatarGroupOptions>;
declare type AvatarGroupState = Required<Pick<AvatarGroupOptions, "spacing" | "size">> & Pick<AvatarGroupOptions, "avatarBorderRadius" | "avatarBorderColor" | "avatarBorderWidth">;
interface AvatarGroupContextValue {
    state: AvatarGroupState;
}
/**
 * AvatarGroup displays a number of avatars grouped together in a stack.
 */
export declare function AvatarGroup<C extends ElementType = "div">(props: AvatarGroupProps<C>): import("solid-js").JSX.Element;
export declare namespace AvatarGroup {
    var toString: () => string;
}
export declare function useAvatarGroupContext(): AvatarGroupContextValue | undefined;
export {};
//# sourceMappingURL=avatar-group.d.ts.map