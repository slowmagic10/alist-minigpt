import { Accessor } from "solid-js";
interface CreateQueueProps<T> {
    initialValues?: T[];
    limit: number;
}
interface CreateQueueState<T> {
    current: Accessor<T[]>;
    queue: Accessor<T[]>;
    limit: Accessor<number>;
}
interface CreateQueueReturn<T> {
    state: CreateQueueState<T>;
    add: (...items: T[]) => void;
    update: (fn: (state: T[]) => T[]) => void;
    clearQueue: () => void;
}
export declare function createQueue<T>(props: CreateQueueProps<T>): CreateQueueReturn<T>;
export {};
//# sourceMappingURL=index.d.ts.map