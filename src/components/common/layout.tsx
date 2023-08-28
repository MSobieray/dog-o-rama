import * as React from "react"
import "../../styles/global-theme.css"
import "../../styles/global-styles.css"
import Header from "./header"
interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
