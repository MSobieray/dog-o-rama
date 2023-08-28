import { globalStyle, globalKeyframes } from "@vanilla-extract/css"
import globalTheme from "./global-theme-contract"

globalStyle("body", {
  margin: 0,
  fontFamily: globalTheme.font.family.text,
  color: globalTheme.color.text,
  backgroundColor: globalTheme.color.background,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
})

globalStyle("*", {
  boxSizing: "border-box",
})

export const globalHeading = globalStyle("h1, h2, h3, h4, h5, h6", {
  fontFamily: globalTheme.font.family.heading,
  fontWeight: globalTheme.font.weight.bold,
  color: globalTheme.color.primary,
})

export const globalHref = globalStyle("a", {
  color: globalTheme.color.text,
  textDecoration: "none",
  fontSize: globalTheme.font.size[3],
})
