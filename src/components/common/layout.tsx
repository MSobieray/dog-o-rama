import * as React from "react"
import "../../styles/global-theme.css"
import "../../styles/global-styles.css"
import Header from "./header"
interface LayoutProps {
  children?: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
