import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { ImageDataLike } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { Container, Section, SuperHeading } from "../components/common/atoms"
import { BreedList, HeroSwap } from "../components/sections/home_page"

type HomepageProps = {
  contentfulDogHomePage: {
    title: string
    heroImages: [
      {
        gatsbyImageData: ImageDataLike
        description: string
        id: string
      }
    ]
    content: [
      {
        id: string
        slug: string
        title: string
        image: {
          description: string
          gatsbyImageData: ImageDataLike
        }
      }
    ]
  }
}

export default function Homepage(props: PageProps<HomepageProps>) {
  const { contentfulDogHomePage: homepage } = props.data
  const { content: dogbreeds } = homepage

  return (
    <Layout>
      <SuperHeading center={true}>{homepage.title}</SuperHeading>
      <HeroSwap images={homepage.heroImages} />
      <Section>
        <Container>
          <BreedList listData={dogbreeds} />
        </Container>
      </Section>
    </Layout>
  )
}

export const Head = (props) => {
  const { contentfulDogHomePage: homepage } = props.data
  return <SEOHead {...homepage} />
}

export const query = graphql`
  {
    contentfulDogHomePage {
      title
      heroImages {
        gatsbyImageData(
          height: 600
          placeholder: DOMINANT_COLOR
          layout: FULL_WIDTH
        )
        description
        id
      }
      content {
        ...DogBreeds
      }
    }
  }
`
