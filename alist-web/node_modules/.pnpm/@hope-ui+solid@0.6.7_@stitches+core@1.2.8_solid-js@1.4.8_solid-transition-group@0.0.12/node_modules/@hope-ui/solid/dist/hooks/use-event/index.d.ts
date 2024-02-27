export interface UseElementEventProps<Key> {
    element?: HTMLElement | Window | Document | undefined;
    eventName?: Key;
    handler?: (event: Event) => void;
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}
export declare function useEvent<Key extends string>(props: UseElementEventProps<Key>): {
    active: () => void;
    inactive: () => void;
};
//# sourceMappingURL=index.d.ts.map