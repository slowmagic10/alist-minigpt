export interface SelectOptionData {
    /**
     * The value to use when the option is selected.
     */
    value: string | number;
    /**
     * Optional text used for typeahead purposes.
     * By default the typeahead behavior will use the `.textContent` of the `SelectOption`.
     * Use this when the content is complex, or you have non-textual content inside.
     */
    textValue: string;
    /**
     * If `true`, the option will be disabled.
     */
    disabled: boolean;
}
interface GetUpdatedIndexParams {
    /**
     * The current active index.
     */
    currentIndex: number;
    /**
     * The index of the last option.
     */
    maxIndex: number;
    /**
     * The initialy performed action.
     */
    initialAction: SelectActions;
    /**
     * Callback invoked to check if an option at a given index is diabled or not.
     */
    isOptionDisabled: (index: number) => boolean;
}
/**
 * List of named combobox actions
 */
export declare enum SelectActions {
    Close = 0,
    SelectAndClose = 1,
    First = 2,
    Last = 3,
    Next = 4,
    Open = 5,
    Previous = 6,
    Select = 7,
    Type = 8
}
/**
 * Return the index of an option from an array of options, based on a search string
 * if the filter is multiple iterations of the same letter (e.g "aaa"), then cycle through first-letter matches
 */
export declare function getIndexByLetter(options: SelectOptionData[], filter: string, startIndex?: number): number;
/**
 * Map a key press to an action.
 */
export declare function getActionFromKey(event: KeyboardEvent, menuOpen: boolean): SelectActions.Close | SelectActions.SelectAndClose | SelectActions.First | SelectActions.Last | SelectActions.Next | SelectActions.Open | SelectActions.Previous | SelectActions.Type | undefined;
/**
 * Get an updated option index after performing an action, ignoring "disabled" option.
 */
export declare function getUpdatedIndex(params: GetUpdatedIndexParams): number;
/**
 * Check if two options are equal.
 */
export declare function isOptionEqual(a: SelectOptionData, b: SelectOptionData): boolean;
export {};
//# sourceMappingURL=select.utils.d.ts.map