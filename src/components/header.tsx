import { Link } from "gatsby"
import * as React from "react"
import { header, logo } from "./header.css"
import { Icon } from "./common/atoms"
function Header() {
  return (
    <header className={header}>
      <Link to="/">
        <Icon className={logo} iconName="pets" variant="primary" />
      </Link>
    </header>
  )
}

export default Header
