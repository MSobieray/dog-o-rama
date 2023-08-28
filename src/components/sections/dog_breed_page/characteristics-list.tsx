import * as React from "react"
import { CharacteristicsKeys } from "../../../pages/breed/{ContentfulDogBreeds.slug}"
import { Flex, Icon, Stat, StatLabel, Subhead } from "../../common/atoms"
import { TextColors, listItems } from "../../common/atoms.css"

import { normalizeKey } from "../../../utils"

function generatePaws(quantity: number, active: number) {
  const paws = []
  for (let i = 0; i < quantity; i++) {
    paws.push(
      <Icon
        key={`${i}-${active}`}
        iconName="pets"
        variant={i < active ? "primary" : "white"}
      />
    )
  }
  return paws
}

function CharacteristicsList({
  characteristics: { data, title },
}: {
  characteristics: {
    data: Record<CharacteristicsKeys, number>
    title: string
  }
}) {
  return (
    <>
      <Subhead className={TextColors["white"]}>{title}</Subhead>
      <ul className={listItems.primary}>
        {Object.keys(data).map((key) => (
          <li key={`${key}`}>
            <Flex>
              <StatLabel>{normalizeKey(key)}:</StatLabel>{" "}
              <Stat>{generatePaws(5, data[key])}</Stat>
            </Flex>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CharacteristicsList
