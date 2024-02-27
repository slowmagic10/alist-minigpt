import type { PropertyValue } from "@stitches/core";
export declare const margin: {
    /**
     * The CSS `margin` property
     */
    m: (value: PropertyValue<"margin">) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    /**
     * The CSS `margin-top` property
     */
    mt: (value: PropertyValue<"marginTop">) => {
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    /**
     * The CSS `margin-right` property
     */
    mr: (value: PropertyValue<"marginRight">) => {
        marginRight: {
            readonly [$$PropertyValue]: "marginRight";
        };
    };
    /**
     * The CSS `margin-inline-start` property
     */
    marginStart: (value: PropertyValue<"marginInlineStart">) => {
        marginInlineStart: {
            readonly [$$PropertyValue]: "marginInlineStart";
        };
    };
    /**
     * The CSS `margin-inline-start` property
     */
    ms: (value: PropertyValue<"marginInlineStart">) => {
        marginInlineStart: {
            readonly [$$PropertyValue]: "marginInlineStart";
        };
    };
    /**
     * The CSS `margin-bottom` property
     */
    mb: (value: PropertyValue<"marginBottom">) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginBottom";
        };
    };
    /**
     * The CSS `margin-left`  property
     */
    ml: (value: PropertyValue<"marginLeft">) => {
        marginLeft: {
            readonly [$$PropertyValue]: "marginLeft";
        };
    };
    /**
     * The CSS `margin-inline-end` property
     */
    marginEnd: (value: PropertyValue<"marginInlineEnd">) => {
        marginInlineEnd: {
            readonly [$$PropertyValue]: "marginInlineEnd";
        };
    };
    /**
     * The CSS `margin-inline-end` property
     */
    me: (value: PropertyValue<"marginInlineEnd">) => {
        marginInlineEnd: {
            readonly [$$PropertyValue]: "marginInlineEnd";
        };
    };
    /**
     * The CSS `margin-inline-start` and `margin-inline-end` property
     */
    mx: (value: PropertyValue<"marginInlineStart">) => {
        marginInlineStart: {
            readonly [$$PropertyValue]: "marginInlineStart";
        };
        marginInlineEnd: {
            readonly [$$PropertyValue]: "marginInlineStart";
        };
    };
    /**
     * The CSS `margin-top` and `margin-bottom` property
     */
    my: (value: PropertyValue<"marginTop">) => {
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    /**
     * Utility to space items in a horizontal stack
     */
    spaceX: (value: PropertyValue<"marginLeft">) => {
        "& > * + *": {
            marginLeft: {
                readonly [$$PropertyValue]: "marginLeft";
            };
        };
    };
    /**
     * Utility to space items in a vertial stack
     */
    spaceY: (value: PropertyValue<"marginTop">) => {
        "& > * + *": {
            marginTop: {
                readonly [$$PropertyValue]: "marginTop";
            };
        };
    };
};
//# sourceMappingURL=margin.d.ts.map