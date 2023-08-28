import * as React from "react"
import {
  Capitalize,
  Container,
  Flex,
  Heading,
  Image,
  Subhead,
} from "../../common/atoms"
import { Link, graphql } from "gatsby"
import { ImageDataLike } from "gatsby-plugin-image"

type BreedListProps = {
  listData: {
    id: string
    title: string
    slug: string
    image: { description: string; gatsbyImageData: ImageDataLike }
  }[]
}
function BreedList({ listData }: BreedListProps) {
  console.log(listData)
  return (
    <>
      <Subhead>List of Breeds</Subhead>
      <Flex variant="spaceBetween">
        {listData.map((breed) => (
          <div key={breed.id}>
            <Link to={`breed/${breed.slug}`}>
              <Flex variant="column">
                <Image image={breed.image} alt={breed.title} />
                <Capitalize>{breed.title}</Capitalize>
              </Flex>
            </Link>
          </div>
        ))}
      </Flex>
    </>
  )
}

export default BreedList

export const query = graphql`
  fragment DogBreeds on ContentfulDogBreeds {
    id
    title
    slug
    image {
      gatsbyImageData(
        layout: CONSTRAINED
        resizingBehavior: CROP
        cropFocus: CENTER
        width: 600
        height: 300
      )
      description
    }
  }
`
