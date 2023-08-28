import { createGlobalThemeContract } from "@vanilla-extract/css"

const globalTheme = createGlobalThemeContract({
  color: {
    background: "background-color",
    text: "text-color",
    primary: "primary-color",
    active: "active-color",
    black: "black-color",
    white: "white-color",
  },
  font: {
    weight: {
      normal: "font-weight-normal",
      medium: "font-weight-medium",
      semibold: "font-weight-semibold",
      bold: "font-weight-bold",
      extrabold: "font-weight-extrabold",
    },
    size: {
      0: "font-size-0",
      1: "font-size-1",
      2: "font-size-2",
      3: "font-size-3",
      4: "font-size-4",
      5: "font-size-5",
      6: "font-size-6",
      7: "font-size-7",
    },
    family: {
      text: "font-family-text",
      heading: "font-family-heading",
      mono: "font-family-mono",
      icon: "font-family-icon",
    },
  },
  text: {
    letterSpacing: {
      normal: "letter-spacing-normal",
      tight: "letter-spacing-tight",
      wide: "letter-spacing-wide",
    },
    lineHeight: {
      text: "line-height-text",
      heading: "line-height-heading",
      tight: "line-height-tight",
      solid: "line-height-solid",
    },
  },
  space: {
    0: "space-0",
    1: "space-1",
    2: "space-2",
    3: "space-3",
    4: "space-4",
    5: "space-5",
    6: "space-6",
  },
  size: {
    container: "size-container",
    narrow: "size-narrow",
    wide: "size-wide",
    fullWidth: "size-full-width",
    tight: "size-tight",
    avatar: "size-avatar",
    navGroupBoxMin: "size-nav-group-box-min",
    navGroupBoxMax: "size-nav-group-box-max",
    navIcon: "size-nav-icon",
    navIconSmall: "size-nav-icon-small",
  },
})

export default globalTheme
