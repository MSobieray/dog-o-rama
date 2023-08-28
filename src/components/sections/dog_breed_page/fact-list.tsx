import * as React from "react"
import { FactListKeys } from "../../../pages/breed/{ContentfulDogBreeds.slug}"
import { Flex, Stat, StatLabel, Subhead } from "../../common/atoms"
import { TextColors, listItems } from "../../common/atoms.css"
import { normalizeKey } from "../../../utils"

function FactList({
  facts: { factSheet, factList },
}: {
  facts: {
    factSheet: string
    factList: Record<FactListKeys, string>
    origin: {
      origin: string
    }
  }
}) {
  return (
    <>
      <Subhead className={TextColors["white"]}>{factSheet}</Subhead>
      <ul className={listItems.primary}>
        {Object.keys(factList).map((key) => (
          <li key={key}>
            <Flex>
              <StatLabel>{normalizeKey(key)}:</StatLabel>{" "}
              <Stat>{factList[key]}</Stat>
            </Flex>
          </li>
        ))}
      </ul>
    </>
  )
}

export default FactList
