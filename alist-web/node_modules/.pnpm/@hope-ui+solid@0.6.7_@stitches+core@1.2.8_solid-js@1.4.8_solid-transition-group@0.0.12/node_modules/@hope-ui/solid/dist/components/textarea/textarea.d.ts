import { HTMLHopeProps, SinglePartComponentStyleConfig } from "../types";
import { TextareaVariants } from "./textarea.styles";
export declare type TextareaStyleConfig = SinglePartComponentStyleConfig<TextareaVariants>;
interface TextareaOptions extends TextareaVariants {
    /**
     * If `true`, the textarea will have `aria-invalid` set to `true`
     */
    invalid?: boolean;
}
export declare type TextareaProps = Omit<HTMLHopeProps<"textarea", TextareaOptions>, "as">;
export declare function Textarea(props: TextareaProps): import("solid-js").JSX.Element;
export declare namespace Textarea {
    var toString: () => string;
}
export {};
//# sourceMappingURL=textarea.d.ts.map