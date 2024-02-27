import { Accessor } from "solid-js";
export interface UseClickOutsideProps {
    /**
     * The reference to a DOM element.
     */
    element: Accessor<HTMLElement | undefined>;
    /**
     * Function invoked when a click is triggered outside the referenced element.
     */
    handler?: (e: Event) => void;
}
export declare function useClickOutside(props: UseClickOutsideProps): void;
//# sourceMappingURL=index.d.ts.map