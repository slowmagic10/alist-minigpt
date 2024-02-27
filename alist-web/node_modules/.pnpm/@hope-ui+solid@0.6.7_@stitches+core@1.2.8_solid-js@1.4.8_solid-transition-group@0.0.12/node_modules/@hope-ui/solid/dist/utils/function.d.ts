import { JSX } from "solid-js";
/**
 * Do nothing.
 */
export declare function noop(): void;
/**
 * Cast a given value to another.
 */
export declare function cast<T>(value: any): T;
/**
 * Return a new object with mapper function applied to all keys of the initial object.
 */
export declare function mapKeys(prop: any, mapper: (val: any) => any): any;
/**
 * Call the handler with the event.
 * Simpler way to call a JSX.EventHandlerUnion programmatically.
 */
export declare function callHandler<T, E extends Event>(handler: JSX.EventHandlerUnion<T, E> | undefined, event: E & {
    currentTarget: T;
    target: Element;
}): boolean | undefined;
/**
 * Return a function that will call all handlers in the order they were chained with the same arguments.
 * Stop at the first `event.preventDefault()` call.
 */
export declare function chainHandlers<T, E extends Event>(...fns: Array<JSX.EventHandlerUnion<T, E> | undefined>): (event: E & {
    currentTarget: T;
    target: Element;
}) => void;
/**
 * Return an array with the size of the provided range.
 */
export declare function range(count: number): number[];
//# sourceMappingURL=function.d.ts.map