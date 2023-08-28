import { style, styleVariants } from "@vanilla-extract/css"
import globalTheme from "../styles/global-theme-contract"

export const header = style({
  padding: globalTheme.space[2],
  color: globalTheme.color.text,
  fontSize: globalTheme.font.size[8],
})

export const logo = style({
  fontSize: globalTheme.font.size[5],
})
