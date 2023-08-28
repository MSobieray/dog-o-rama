import * as React from "react"
import "../styles/global-theme.css"
import "../styles/global-styles.css"
interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <>{children}</>
}

export default Layout
