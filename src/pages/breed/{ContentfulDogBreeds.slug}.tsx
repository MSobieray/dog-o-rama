import { graphql } from "gatsby"
import * as React from "react"
import type { PageProps } from "gatsby"
import {
  Container,
  Image,
  Section,
  SuperHeading,
  Body,
  Subhead,
} from "../../components/common/atoms"
import {
  CharacteristicsList,
  FactList,
} from "../../components/sections/dog_breed_page"
import SEOHead from "../../components/common/head"
import Layout from "../../components/common/layout"

// These typed key values might be to strict
// and could prevent adding any number of values to the CMS
// Not sure if we can lock this down in contentful and enforce it....
export type CharacteristicsKeys =
  | "barking_tendencies"
  | "energy_levels"
  | "exercise_needs"
  | "friendliness"
  | "health_issues"
  | "playfulness"

export type FactListKeys =
  | "life_expectancy"
  | "maintenance_level"
  | "shed_level"
  | "size"

type DogBreedData = {
  contentfulDogBreeds: {
    title: string
    slug: string
    summary: {
      summary: string
    }
    image: {
      description: string
      gatsbyImageData: any
    }
    content: [
      {
        title: string
        data: Record<CharacteristicsKeys, number>
      },
      {
        factSheet: string
        factList: Record<FactListKeys, string>
        origin: { origin: string }
      }
    ]
  }
}

export default function DogBreedPage(props: PageProps<DogBreedData>) {
  const { contentfulDogBreeds: dogBreed } = props.data
  const {
    summary: { summary },
    content: [characteristics, facts],
  } = dogBreed

  return (
    <>
      <Layout>
        <SuperHeading center={true}>{dogBreed.title}</SuperHeading>
        <Container width="fullWidth">
          <Image
            image={dogBreed.image.gatsbyImageData}
            alt={dogBreed.image.description}
          />
        </Container>
        <Container>
          {/* TODO: add ability to render markdown  */}
          <Section>
            <Subhead>Summary</Subhead>
            <Body>{summary}</Body>
          </Section>
        </Container>
        <Container width="fullWidth" backgroundTheme="active">
          <Section>
            <Container>
              <CharacteristicsList characteristics={characteristics} />
              <FactList facts={facts} />
            </Container>
          </Section>
        </Container>
      </Layout>
    </>
  )
}

export const Head = ({ data, ...props }: PageProps<DogBreedData>) => {
  const { contentfulDogBreeds: dogBreed } = data

  return (
    <SEOHead
      title={dogBreed.title}
      description={dogBreed.summary.summary}
      siteUrl={`${props.location.pathname}`}
    />
  )
}

export const query = graphql`
  query DogBreedQuery($id: String!) {
    contentfulDogBreeds(id: { eq: $id }) {
      title
      summary {
        summary
      }
      image {
        description
        gatsbyImageData(layout: FULL_WIDTH, height: 700)
      }
      content {
        ... on ContentfulBreedCharacteristics {
          title
          data {
            barking_tendencies
            energy_levels
            exercise_needs
            friendliness
            health_issues
            playfulness
          }
          title
        }
        ... on ContentfulBreedFacts {
          factSheet
          factList {
            life_expectancy
            maintenance_level
            shed_level
            size
          }
          origin {
            origin
          }
        }
      }
    }
  }
`
