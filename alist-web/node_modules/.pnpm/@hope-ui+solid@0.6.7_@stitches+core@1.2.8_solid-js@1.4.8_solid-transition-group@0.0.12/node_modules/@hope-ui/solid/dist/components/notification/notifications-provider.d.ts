import { JSX } from "solid-js";
import { PositionProps } from "../../styled-system/props/position";
import { NotificationListVariants } from "./notification.styles";
interface NotificationsProviderProps extends NotificationListVariants {
    /**
     * Maximum amount of notifications displayed at a time,
     * other new notifications will be added to queue.
     */
    limit?: number;
    /**
     * The delay (in ms) before the notification hides.
     */
    duration?: number;
    /**
     * If `true`, duration will be ignored and notifications will never dismiss.
     */
    persistent?: boolean;
    /**
     * If `true`, notifications will show a close button.
     */
    closable?: boolean;
    /**
     * The `z-index` css property of all notifications.
     */
    zIndex?: PositionProps["zIndex"];
    /**
     * The children of the notifications provider.
     */
    children: JSX.Element;
}
/**
 * Context provider for the notification system.
 */
export declare function NotificationsProvider(props: NotificationsProviderProps): JSX.Element;
export {};
//# sourceMappingURL=notifications-provider.d.ts.map