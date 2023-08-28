import { style } from "@vanilla-extract/css"
import globalTheme from "../../../styles/global-theme-contract"

export const heading = style({
  fontFamily: globalTheme.font.family.mono,
  fontStyle: "normal",
  letterSpacing: "-0.02em",
})

export const link = style({
  fontSize: globalTheme.font.size[4],
  fontWeight: globalTheme.font.weight.bold,
  textAlign: "center",
  color: "inherit",
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",
  gap: "10px",
  fontFamily: globalTheme.font.family.heading,
})

export const linkChevron = style({
  height: "12px",
})

export const text = style({
  fontSize: globalTheme.font.size[4],
  textAlign: "center",
  marginBottom: 0,
})
