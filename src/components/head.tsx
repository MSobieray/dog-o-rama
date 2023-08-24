import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
interface HeadProps {
  title?: string
  description?: string
  image?: { url: string }
  siteUrl?: string
}

export default function Head(props: HeadProps) {
  const data: { site: { siteMetadata: HeadProps } } = useStaticQuery(graphql`
    query getSiteMetaData {
      site {
        siteMetadata {
          siteUrl
          description
          title
          image {
            url
          }
        }
      }
    }
  `)

  const title = props.title || data?.site?.siteMetadata?.title
  const description = props.description || data?.site?.siteMetadata?.title
  const siteUrl = new URL(
    props.siteUrl || data?.site?.siteMetadata?.siteUrl,
    data?.site?.siteMetadata?.siteUrl
  ) as unknown as string
  const image = new URL(
    props.image?.url || data?.site?.siteMetadata?.image?.url,
    data?.site?.siteMetadata?.siteUrl
  ) as unknown as string
  return (
    <>
      <meta charSet="utf-8" />
      <link rel="canonical" href={siteUrl} />
      <title>{title}</title>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </>
  )
}
