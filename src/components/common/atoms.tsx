import * as React from "react"
import * as styles from "./atoms.css"
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image"
import { SpaceTokens } from "../../styles/global-theme.css"

export const cx = (...args: (string | undefined)[]) =>
  args.filter(Boolean).join(" ")

type WithChildren<T = {}> = T & { children?: React.ReactNode }

interface BaseProps {
  as?: React.ElementType | React.FC
  cx?: string[]
  className?: string
}

export function Base({
  as: Component = "div",
  cx: _cx = [],
  className,
  ...props
}: BaseProps) {
  return <Component className={cx(..._cx, className)} {...props} />
}

interface TextProps extends BaseProps {
  variant?: styles.TextVariants
  center?: boolean
  bold?: boolean
}

export function Text({
  variant = "body",
  center = false,
  bold = false,
  ...props
}: WithChildren<TextProps>) {
  return (
    <Base
      cx={[
        styles.text[variant],
        center && styles.text.center,
        bold && styles.text.bold,
      ]}
      {...props}
    />
  )
}

export function Body({ ...props }) {
  return <Text as="p" variant="body" {...props} />
}

export function SuperHeading({ ...props }) {
  return <Text as="h1" variant="superHeading" {...props} />
}

export function Heading({ ...props }) {
  return <Text as="h2" variant="heading" {...props} />
}

export function Subhead({ ...props }) {
  return <Text as="h3" variant="subhead" {...props} />
}

export function SubheadSmall({ ...props }) {
  return <Text as="h4" variant="subheadSmall" {...props} />
}

export function Capitalize({ ...props }) {
  return <Text as="span" variant="caps" {...props} />
}

export function Stat({ ...props }) {
  return <Text as="h5" variant="stat" {...props} />
}

export function StatLabel({ ...props }) {
  return <Text as="label" variant="statLabel" {...props} />
}

interface ImageProps extends BaseProps {
  alt: string
  image: ImageDataLike
}

export function Image(
  { alt, image, ...props }: ImageProps,
  ref: React.LegacyRef<HTMLDivElement>
) {
  return <GatsbyImage image={getImage(image)} alt={alt} {...props} />
}

interface FlexProps extends BaseProps {
  variant?: styles.FlexVariants
  gap?: SpaceTokens
  gutter?: SpaceTokens
  wrap?: boolean
  responsive?: boolean
  marginY?: SpaceTokens
  alignItems?: styles.FlexVariants
}

export function Flex({
  variant,
  gap = 3,
  gutter,
  wrap,
  responsive,
  marginY,
  alignItems,
  cx: _cx = [],
  ...props
}: WithChildren<FlexProps>) {
  return (
    <Base
      cx={[
        styles.flex,
        variant && styles.flexVariants[variant],
        responsive && styles.flexVariants.responsive,
        wrap && styles.flexVariants.wrap,
        gutter && styles.gutter[gutter],
        gutter ? styles.flexGap[0] : styles.flexGap[gap],
        marginY && styles.marginY[marginY],
        alignItems && styles.flexVariants[alignItems],
        ..._cx,
      ]}
      {...props}
    />
  )
}

interface ContainerProps extends BaseProps {
  width?: styles.Containers
  backgroundTheme?: styles.BackgroundThemeVariants
}

export function Container({
  width = "normal",
  backgroundTheme = undefined,
  ...props
}: WithChildren<ContainerProps>) {
  return (
    <Base
      cx={[styles.containers[width], styles.backgroundTheme[backgroundTheme]]}
      {...props}
    />
  )
}

interface SectionProps extends BaseProps {}
export function Section({ ...props }: WithChildren<SectionProps>) {
  return <Base as="section" className={styles.section} {...props} />
}

export function ImageSwapWrapper(props) {
  return <Base cx={[styles.imageSwapWrapper]} {...props} />
}

interface IconProps extends BaseProps {
  variant?: styles.IconColorVariants
  iconName: string
  className
}
export function Icon({
  iconName,
  variant = "white",
  className,
  ...props
}: IconProps) {
  return (
    <span
      className={`${styles.icon[variant]} material-symbols ${className}`}
      {...props}
    >
      {iconName}
    </span>
  )
}
