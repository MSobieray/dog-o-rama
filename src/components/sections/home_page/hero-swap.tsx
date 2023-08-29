import * as React from "react"
import { Container, Image, ImageSwapWrapper } from "../../common/atoms"
import { ImageDataLike } from "gatsby-plugin-image"

type HeroSliderProps = {
  images: [
    {
      gatsbyImageData: ImageDataLike
      description: string
      id: string
    }
  ]
}

function HeroSlider({ images }: HeroSliderProps) {
  const [heroPosition, setHeroPosition] = React.useState(0)
  const image = images[heroPosition]

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("timeout")
      if (heroPosition === images.length - 1) {
        setHeroPosition(0)
      } else {
        setHeroPosition(heroPosition + 1)
      }
    }, 3000)

    return () => clearTimeout(timeout)
  })

  return (
    <Container width="fullWidth">
      <ImageSwapWrapper>
        <Image image={image} alt={image.description} />
      </ImageSwapWrapper>
    </Container>
  )
}

export default HeroSlider
