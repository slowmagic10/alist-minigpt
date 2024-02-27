import { Accessor } from "solid-js";
import { NotificationConfig } from "./notification.types";
export interface NotificationsProviderContextValue {
    /**
     * All currently displayed notifications.
     */
    notifications: Accessor<NotificationConfig[]>;
    /**
     * All pending notifications.
     */
    queue: Accessor<NotificationConfig[]>;
    /**
     * Show a notification.
     */
    showNotification(config: NotificationConfig): string;
    /**
     * Update a notification for a given `id`.
     */
    updateNotification(id: string, config: NotificationConfig): void;
    /**
     * Hide a notification.
     */
    hideNotification(id: string): void;
    /**
     * Remove all notifications.
     * (displayed and from the queue)
     */
    clear(): void;
    /**
     * Remove all pending notifications for the queue only.
     */
    clearQueue(): void;
}
export declare const NotificationsProviderContext: import("solid-js").Context<NotificationsProviderContextValue | undefined>;
export declare function useNotificationsProviderContext(): NotificationsProviderContextValue;
//# sourceMappingURL=notifications-provider.context.d.ts.map