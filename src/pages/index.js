import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = (props) => {
  const books = props.data.allMongodbMernstackUsers.edges;
  return (
    <Layout>
      <Seo title="Home" />
      <div className="book-container">
        {books.map(book =>
            <div key={book.node.id} className="book">
                <Link to={`/users/`+book.node.email}>
                    <p>{book.node.email}</p>
                </Link>
            </div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMongodbMernstackUsers {
      edges {
        node {
          id
          email
        }
      }
    }
  }
`
