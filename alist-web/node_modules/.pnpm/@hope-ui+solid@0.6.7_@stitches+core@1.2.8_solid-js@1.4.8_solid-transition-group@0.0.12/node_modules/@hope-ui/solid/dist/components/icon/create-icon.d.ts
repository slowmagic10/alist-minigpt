import { JSX } from "solid-js";
import { ElementType } from "../types";
import { IconProps } from "./icon";
interface CreateIconOptions {
    /**
     * The icon `svg` viewBox
     * @default "0 0 24 24"
     */
    viewBox?: string;
    /**
     * A function that return the `svg` path or group element
     * @type () => JSX.Element | JSX.Element[]
     */
    path: () => JSX.Element | JSX.Element[];
    /**
     * Default props automatically passed to the component; overwriteable
     */
    defaultProps?: IconProps<"svg">;
}
export declare function createIcon(options: CreateIconOptions): {
    <C extends ElementType<any> = "svg">(props: IconProps<C>): JSX.Element;
    toString(): string;
};
export {};
//# sourceMappingURL=create-icon.d.ts.map