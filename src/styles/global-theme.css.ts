import { createGlobalTheme } from "@vanilla-extract/css"
import { colors } from "./colors.css"
import vars from "./global-theme-contract"

export type SpaceTokens = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type Space = Record<SpaceTokens, string>

createGlobalTheme(":root", vars, {
  color: {
    background: colors.background,
    text: colors.text,
    primary: colors.primary,
    active: colors.active,
    black: colors.black,
    white: colors.white,
  },
  font: {
    weight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    size: {
      0: "12px",
      1: "14px",
      2: "16px",
      3: "18px",
      4: "24px",
      5: "32px",
      6: "48px",
      7: "64px",
    },
    family: {
      text: '"DM Sans", sans-serif',
      heading: '"DM Sans", sans-serif',
      mono: "DM Mono, Menlo, monospace",
      icon: '"Material Icons", sans-serif',
    },
  },
  text: {
    letterSpacing: {
      normal: "0",
      tight: "-0.02em",
      wide: "0.08em",
    },
    lineHeight: {
      text: "1.65",
      heading: "1.25",
      tight: "1.1",
      solid: "1",
    },
  },
  space: {
    0: "0",
    1: "4px",
    2: "8px",
    3: "16px",
    4: "32px",
    5: "64px",
    6: "128px",
  },
  size: {
    container: "1280px",
    narrow: "1024px",
    wide: "1900px",
    fullWidth: "100vw",
    tight: "848px",
    avatar: "48px",
    navGroupBoxMin: "300px",
    navGroupBoxMax: "400px",
    navIcon: "32px",
    navIconSmall: "30px",
  },
})
