import { JSX } from "solid-js";
/**
 * Allows for extending a set of props (`Source`) by an overriding set of props
 * (`Override`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
export declare type OverrideProps<Source = {}, Override = {}> = Omit<Source, keyof Override> & Override;
export declare type EventKeys = "ArrowDown" | "ArrowUp" | "ArrowLeft" | "ArrowRight" | "Enter" | "Space" | "Tab" | "Backspace" | "Control" | "Meta" | "Home" | "End" | "PageDown" | "PageUp" | "Delete" | "Escape" | " " | "Shift";
export declare type EventKeyMap = Partial<Record<EventKeys, JSX.EventHandlerUnion<HTMLElement, KeyboardEvent>>>;
//# sourceMappingURL=types.d.ts.map