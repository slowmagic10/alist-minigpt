import { Accessor } from "solid-js";
import { SystemStyleObject } from "../../styled-system/types";
import { ElementType, HTMLHopeProps } from "../types";
import { NotificationVariants } from "./notification.styles";
declare type ThemeableNotificationOptions = NotificationVariants;
export declare type NotificationProps<C extends ElementType = "div"> = HTMLHopeProps<C, NotificationVariants>;
export declare function Notification<C extends ElementType = "div">(props: NotificationProps<C>): import("solid-js").JSX.Element;
export declare namespace Notification {
    var toString: () => string;
}
declare type NotificationContextValue = {
    status: Accessor<NotificationVariants["status"]>;
};
export declare function useNotificationContext(): NotificationContextValue;
export interface NotificationStyleConfig {
    baseStyle?: {
        root?: SystemStyleObject;
        icon?: SystemStyleObject;
        title?: SystemStyleObject;
        description?: SystemStyleObject;
    };
    defaultProps?: {
        root?: ThemeableNotificationOptions;
    };
}
export {};
//# sourceMappingURL=notification.d.ts.map