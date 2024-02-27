import { ElementType, HTMLHopeProps } from "../types";
export interface FormLabelOptions {
    withRequiredIndicator?: boolean;
}
export declare type FormLabelProps<C extends ElementType = "label"> = HTMLHopeProps<C, FormLabelOptions>;
export declare function FormLabel<C extends ElementType = "label">(props: FormLabelProps<C>): import("solid-js").JSX.Element;
export declare namespace FormLabel {
    var toString: () => string;
}
//# sourceMappingURL=form-label.d.ts.map