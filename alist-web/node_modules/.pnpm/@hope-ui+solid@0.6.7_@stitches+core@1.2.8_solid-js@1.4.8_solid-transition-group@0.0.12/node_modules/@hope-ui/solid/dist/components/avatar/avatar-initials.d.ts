import { HTMLHopeProps } from "../types";
import { AvatarOptions } from "./avatar";
declare type AvatarInitialsProps = HTMLHopeProps<"div", Pick<AvatarOptions, "getInitials" | "name">>;
/**
 * The avatar initials container.
 */
export declare function AvatarInitials(props: AvatarInitialsProps): import("solid-js").JSX.Element;
export declare namespace AvatarInitials {
    var toString: () => string;
}
export {};
//# sourceMappingURL=avatar-initials.d.ts.map