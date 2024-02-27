import { PropsWithChildren } from "solid-js";
export declare type ClickOutsideProps = PropsWithChildren<{
    /**
     * Callback invoked when the user click outside.
     */
    onClickOutside: (event: Event) => void;
}>;
/**
 * Renderless component that manage outside click on its children.
 * It accepts one `JSX.Element` as children, no `Fragment`.
 */
export declare function ClickOutside(props: ClickOutsideProps): import("solid-js").Accessor<import("solid-js/types/reactive/signal").ResolvedChildren>;
//# sourceMappingURL=click-outside.d.ts.map