import { globalStyle, style, styleVariants } from "@vanilla-extract/css"
import { calc } from "@vanilla-extract/css-utils"
import globalTheme from "../../styles/global-theme-contract"

const breakpoints = ["40em", "52em", "64em"]

export const media = {
  small: `screen and (min-width: ${breakpoints[0]})`,
  medium: `screen and (min-width: ${breakpoints[1]})`,
  large: `screen and (min-width: ${breakpoints[2]})`,
}

export const margin0 = style({ margin: 0 })

export type BackgroundThemeVariants = "active" | "dark"

export const backgroundTheme: Record<BackgroundThemeVariants, string> =
  styleVariants({
    active: {
      backgroundColor: globalTheme.color.active,
    },
    dark: {
      backgroundColor: globalTheme.color.text,
    },
  })

export type TextVariants =
  | "body"
  | "superHeading"
  | "heading"
  | "subhead"
  | "subheadSmall"
  | "caps"
  | "stat"
  | "statLabel"
  | "center"
  | "bold"

export const text: Record<TextVariants, string> = styleVariants({
  body: [
    margin0,
    {
      marginBottom: globalTheme.space[3],
      fontSize: globalTheme.font.size[2],
      fontWeight: globalTheme.font.weight.normal,
      lineHeight: globalTheme.text.lineHeight.text,
      letterSpacing: globalTheme.text.letterSpacing.normal,
    },
  ],
  superHeading: [
    margin0,
    {
      marginTop: globalTheme.space[4],
      marginBottom: globalTheme.space[4],
      fontSize: globalTheme.font.size[5],
      fontFamily: globalTheme.font.family.heading,
      fontWeight: globalTheme.font.weight.extrabold,
      lineHeight: globalTheme.text.lineHeight.heading,
      letterSpacing: globalTheme.text.letterSpacing.tight,
      "@media": {
        [media.small]: {
          fontSize: globalTheme.font.size[7],
        },
      },
    },
  ],
  heading: [
    margin0,
    {
      marginBottom: globalTheme.space[3],
      fontFamily: globalTheme.font.family.heading,
      fontSize: globalTheme.font.size[5],
      fontWeight: globalTheme.font.weight.extrabold,
      lineHeight: globalTheme.text.lineHeight.tight,
      letterSpacing: globalTheme.text.letterSpacing.tight,
      "@media": {
        [media.medium]: {
          fontSize: globalTheme.font.size[6],
        },
      },
    },
  ],
  subhead: [
    margin0,
    {
      marginBottom: globalTheme.space[3],
      fontSize: globalTheme.font.size[5],
      fontWeight: globalTheme.font.weight.extrabold,
      lineHeight: globalTheme.text.lineHeight.tight,
      letterSpacing: globalTheme.text.letterSpacing.tight,
    },
  ],
  subheadSmall: [
    margin0,
    {
      marginBottom: globalTheme.space[3],
      fontSize: globalTheme.font.size[4],
      fontWeight: globalTheme.font.weight.extrabold,
      lineHeight: globalTheme.text.lineHeight.tight,
      letterSpacing: globalTheme.text.letterSpacing.tight,
    },
  ],
  caps: [
    margin0,
    {
      marginBottom: globalTheme.space[2],
      fontSize: globalTheme.font.size[1],
      fontWeight: globalTheme.font.weight.semibold,
      letterSpacing: globalTheme.text.letterSpacing.wide,
      textTransform: "uppercase",
      fontStyle: "normal",
    },
  ],
  stat: [
    margin0,
    {
      fontFamily: globalTheme.font.family.mono,
      fontSize: globalTheme.font.size[3],
      fontWeight: globalTheme.font.weight.bold,
      lineHeight: globalTheme.text.lineHeight.tight,
    },
  ],
  statLabel: [
    margin0,
    {
      fontWeight: globalTheme.font.weight.bold,
      fontSize: globalTheme.font.size[4],
      lineHeight: globalTheme.text.lineHeight.heading,
    },
  ],
  center: {
    textAlign: "center",
  },
  bold: {
    fontWeight: globalTheme.font.weight.bold,
  },
})

export type TextColorVariants = "primary" | "active" | "white" | "black"

export const TextColors: Record<TextColorVariants, string> = styleVariants({
  white: {
    color: globalTheme.color.white,
  },
  black: {},
  primary: {},
  active: {},
})
export type FlexVariants =
  | "wrap"
  | "start"
  | "baseline"
  | "columnStart"
  | "column"
  | "end"
  | "stretch"
  | "spaceBetween"
  | "center"
  | "responsive"

export const flexVariants: Record<FlexVariants, string> = styleVariants({
  wrap: {
    flexWrap: "wrap",
  },
  start: {
    alignItems: "flex-start",
  },
  baseline: {
    alignItems: "baseline",
  },
  columnStart: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  column: {
    flexDirection: "column",
  },
  end: {
    alignItems: "flex-end",
  },
  stretch: {
    alignItems: "stretch",
  },
  spaceBetween: {
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  center: {
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  responsive: {
    flexDirection: "column",
    "@media": {
      [media.small]: {
        flexDirection: "row",
      },
    },
  },
})

export const flex = style({
  display: "flex",
  alignItems: "center",
})

export const padding = styleVariants(globalTheme.space, (padding) => ({
  padding,
}))

export const paddingY = styleVariants(globalTheme.space, (padding) => ({
  paddingTop: padding,
  paddingBottom: padding,
}))

export const marginY = styleVariants(globalTheme.space, (margin) => ({
  marginTop: margin,
  marginBottom: margin,
}))

export const gutter = styleVariants(globalTheme.space, (val: string) => ({
  marginLeft: calc.multiply(val, -1),
  marginRight: calc.multiply(val, -1),
}))

export const flexGap = styleVariants(globalTheme.space, (gap) => ({ gap }))

export const container = style({
  maxWidth: globalTheme.size.container,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: globalTheme.space[4],
  paddingRight: globalTheme.space[4],
})

export type Containers =
  | "normal"
  | "wide"
  | "narrow"
  | "tight"
  | "fullbleed"
  | "fullWidth"

export const containers: Record<Containers, string> = styleVariants({
  normal: [container],
  wide: [
    container,
    {
      maxWidth: globalTheme.size.wide,
      paddingLeft: 0,
      paddingRight: 0,
    },
  ],
  narrow: [
    container,
    {
      maxWidth: globalTheme.size.narrow,
    },
  ],
  tight: [
    container,
    {
      maxWidth: globalTheme.size.tight,
    },
  ],
  fullbleed: [
    container,
    {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: globalTheme.space[4],
      paddingBottom: globalTheme.space[4],
      "@media": {
        [media.medium]: {
          paddingLeft: globalTheme.space[4],
          paddingRight: globalTheme.space[4],
          paddingTop: globalTheme.space[5],
          paddingBottom: globalTheme.space[5],
        },
      },
    },
  ],
  fullWidth: [
    container,
    {
      minWidth: globalTheme.size.fullWidth,
      padding: 0,
    },
  ],
})

export const section = style({
  paddingTop: globalTheme.space[4],
  paddingBottom: globalTheme.space[4],
  "@media": {
    [media.small]: {
      paddingTop: globalTheme.space[5],
      paddingBottom: globalTheme.space[5],
    },
  },
})

export const imageSwapWrapper = style({
  background: globalTheme.color.primary,
  paddingTop: globalTheme.space[2],
  paddingBottom: globalTheme.space[2],
})

globalStyle(`${imageSwapWrapper} [data-gatsby-image-wrapper]`, {
  height: "66vh",
})

export type IconColorVariants =
  | "white"
  | "primary"
  | "active"
  | "black"
  | "grey"

const iconFontFamily = style({
  fontFamily: globalTheme.font.family.icon,
})

export const icon: Record<IconColorVariants, string> = styleVariants({
  white: [
    iconFontFamily,
    {
      color: globalTheme.color.white,
    },
  ],
  primary: [
    iconFontFamily,
    {
      color: globalTheme.color.primary,
    },
  ],
  active: [
    iconFontFamily,
    {
      color: globalTheme.color.active,
    },
  ],
  black: [
    iconFontFamily,
    {
      color: globalTheme.color.text,
    },
  ],
  grey: [
    iconFontFamily,
    {
      color: globalTheme.color.background,
    },
  ],
})

export type ListItemVariants = "primary"
export const listItems: Record<ListItemVariants, string> = styleVariants({
  primary: [
    {
      padding: 0,
      listStyle: "none",
      color: globalTheme.color.white,
    },
    // TODO: add more variants and create associated component
  ],
})
