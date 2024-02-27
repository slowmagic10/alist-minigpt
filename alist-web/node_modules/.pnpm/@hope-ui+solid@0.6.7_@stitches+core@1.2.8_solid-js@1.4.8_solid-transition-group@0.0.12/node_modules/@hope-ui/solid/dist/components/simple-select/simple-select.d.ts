import { SelectProps } from "../select";
import { HTMLHopeProps } from "../types";
interface SimpleSelectOptions extends SelectProps {
    /**
     * The placeholder to display when no option is selected.
     */
    placeholder?: string;
}
export declare type SimpleSelectProps = HTMLHopeProps<"button", SimpleSelectOptions>;
/**
 * A simple abstraction built on top of `Select`.
 * Use this if you don't need to customize every parts of `Select` and want a simpler API.
 */
export declare function SimpleSelect(props: SimpleSelectProps): import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=simple-select.d.ts.map