declare type ValueOf<T> = T[keyof T];
export declare const NOTIFICATIONS_EVENTS: {
    readonly show: "hope-ui:show-notification";
    readonly update: "hope-ui:update-notification";
    readonly hide: "hope-ui:hide-notification";
    readonly clear: "hope-ui:clear-notifications";
    readonly clearQueue: "hope-ui:clear-notifications-queue";
};
export declare function createEvent(type: ValueOf<typeof NOTIFICATIONS_EVENTS>, detail?: any): CustomEvent<any>;
export {};
//# sourceMappingURL=notification.events.d.ts.map