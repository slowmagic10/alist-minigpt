import { BorderProps } from "./props/border";
import { ColorProps } from "./props/color";
import { CSSProp } from "./props/css";
import { FlexboxProps } from "./props/flexbox";
import { GridLayoutProps } from "./props/grid";
import { InteractivityProps } from "./props/interactivity";
import { LayoutProps } from "./props/layout";
import { MarginProps } from "./props/margin";
import { PaddingProps } from "./props/padding";
import { PositionProps } from "./props/position";
import { PseudoSelectorProps } from "./props/pseudo-selector";
import { RadiiProps } from "./props/radii";
import { ShadowProps } from "./props/shadow";
import { SizeProps } from "./props/size";
import { TransformProps } from "./props/transform";
import { TransitionProps } from "./props/transition";
import { TypographyProps } from "./props/typography";
import { KeysOf, ResponsiveProps, SystemStyleObject } from "./types";
/**
 * All styled system props.
 */
export declare type StyleProps = ResponsiveProps<BorderProps & ColorProps & FlexboxProps & GridLayoutProps & InteractivityProps & LayoutProps & MarginProps & PaddingProps & PositionProps & RadiiProps & ShadowProps & SizeProps & TransformProps & TransitionProps & TypographyProps & PseudoSelectorProps> & CSSProp;
export declare const stylePropNames: KeysOf<StyleProps>;
/**
 * Generate a css class based on style props and optional `baseStyles`.
 * `baseStyles` objects should be declared in the order of desired style override.
 */
export declare function createStyledSystemClass(props: StyleProps, baseStyles?: Array<SystemStyleObject | undefined>): string & {
    className: string;
    selector: string;
    props: {};
};
/**
 * Take a props object and return only the keys that match a style prop.
 */
export declare function getUsedStylePropNames(props: Record<string | number, any>): ("background" | "alignContent" | "alignItems" | "alignSelf" | "appearance" | "backgroundColor" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStyle" | "borderBottomWidth" | "borderLeftColor" | "borderLeftStyle" | "borderLeftWidth" | "borderRightColor" | "borderRightStyle" | "borderRightWidth" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStyle" | "borderTopWidth" | "bottom" | "boxShadow" | "clipPath" | "color" | "columnGap" | "cursor" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridColumnEnd" | "gridColumnStart" | "gridRowEnd" | "gridRowStart" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "height" | "justifyContent" | "justifyItems" | "justifySelf" | "left" | "letterSpacing" | "lineHeight" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "objectFit" | "objectPosition" | "opacity" | "order" | "outlineColor" | "outlineOffset" | "overflowX" | "overflowY" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "placeContent" | "pointerEvents" | "position" | "resize" | "right" | "rowGap" | "textAlign" | "textShadow" | "textTransform" | "top" | "transform" | "transformOrigin" | "transitionDelay" | "transitionDuration" | "transitionProperty" | "transitionTimingFunction" | "userSelect" | "verticalAlign" | "width" | "willChange" | "zIndex" | "animation" | "border" | "borderBottom" | "borderColor" | "borderLeft" | "borderRadius" | "borderRight" | "borderStyle" | "borderTop" | "borderWidth" | "flex" | "gap" | "gridArea" | "gridColumn" | "gridRow" | "gridTemplate" | "margin" | "outline" | "overflow" | "padding" | "placeItems" | "placeSelf" | "textDecoration" | "transition" | "px" | "noOfLines" | "w" | "minW" | "maxW" | "h" | "minH" | "maxH" | "boxSize" | "shadow" | "p" | "pt" | "pr" | "paddingStart" | "ps" | "pb" | "pl" | "pe" | "paddingEnd" | "py" | "m" | "mt" | "mr" | "marginStart" | "ms" | "mb" | "ml" | "marginEnd" | "me" | "mx" | "my" | "borderTopRadius" | "borderRightRadius" | "borderStartRadius" | "borderBottomRadius" | "borderLeftRadius" | "borderEndRadius" | "rounded" | "roundedTop" | "roundedRight" | "roundedStart" | "roundedBottom" | "roundedLeft" | "roundedEnd" | "_hover" | "_active" | "_focus" | "_highlighted" | "_focusWithin" | "_focusVisible" | "_disabled" | "_readOnly" | "_before" | "_after" | "_empty" | "_expanded" | "_checked" | "_grabbed" | "_pressed" | "_invalid" | "_valid" | "_loading" | "_selected" | "_hidden" | "_even" | "_odd" | "_first" | "_last" | "_notFirst" | "_notLast" | "_visited" | "_activeLink" | "_activeStep" | "_indeterminate" | "_groupHover" | "_peerHover" | "_groupFocus" | "_peerFocus" | "_groupFocusVisible" | "_peerFocusVisible" | "_groupActive" | "_peerActive" | "_groupSelected" | "_peerSelected" | "_groupDisabled" | "_peerDisabled" | "_groupInvalid" | "_peerInvalid" | "_groupChecked" | "_peerChecked" | "_groupFocusWithin" | "_peerFocusWithin" | "_peerPlaceholderShown" | "_placeholder" | "_placeholderShown" | "_fullScreen" | "_selection" | "_mediaDark" | "_mediaReduceMotion" | "_dark" | "_light" | "pos" | "d" | "borderX" | "borderY" | "bg" | "bgColor" | "css")[];
//# sourceMappingURL=system.d.ts.map