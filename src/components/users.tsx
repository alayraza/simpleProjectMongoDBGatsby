import React from "react"
import { Link ,graphql,PageProps } from "gatsby"
import Layout from "./layout"
import Seo from "./seo"

type data = {
    mongodbMernstackUsers: {
      email:string
      id:string
      name:string
      phone:string
      password:string
    }
}
const Users: React.FC<PageProps<data>> = ({ data, path }) => {
    return (
      <Layout>
        <Seo title="User" />
        <div className="book-container">
        <p>Email: {data.mongodbMernstackUsers.email}</p>
        <p>Name: {data.mongodbMernstackUsers.name}</p>
        <p>Phone: {data.mongodbMernstackUsers.phone}</p>
        </div>
      </Layout>
    )
  }
  
export default Users
  

export const pageQuery = graphql`
    query ($email: String!) {
        mongodbMernstackUsers(email: { eq: $email }) {
          email
          id
          name
          phone
          password      
        }
    }
`