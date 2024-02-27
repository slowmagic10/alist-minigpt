import { ImageProps } from "../image";
import { AvatarProps } from "./avatar";
export declare type AvatarImageProps = ImageProps & Pick<AvatarProps, "getInitials" | "name" | "icon" | "iconLabel" | "borderRadius">;
export declare function AvatarImage(props: AvatarImageProps): import("solid-js").JSX.Element;
export declare namespace AvatarImage {
    var toString: () => string;
}
//# sourceMappingURL=avatar-image.d.ts.map