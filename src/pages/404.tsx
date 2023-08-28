import * as React from "react"
import Layout from "../components/common/layout"
import * as styles from "../components/sections/404_page/404.css"
import SEOHead from "../components/common/head"
import { Link } from "gatsby"

export default function NotFound() {
  return (
    <Layout>
      <p className={styles.text}>
        404 Page not found Sorry! We couldn’t find the page you were looking
        for.
      </p>
      <Link to="/" className={styles.link}>
        <span>Back to home</span>
      </Link>
    </Layout>
  )
}
export const Head = () => {
  return <SEOHead title="404: Page not found" />
}
