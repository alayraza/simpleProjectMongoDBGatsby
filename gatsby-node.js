/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      users: allMongodbMernstackUsers {
        edges {
          node {
            id
            email
          }
        }
      }
    }
  `)
  console.log("data",data.users.edges)

  const pageTemplate = path.resolve('./src/components/users.tsx')

  for (const { node } of data.users.edges) {
    createPage({
        path: `/users/${node.email}/`,
        component: pageTemplate,
        context: {
        email: node.email,
      },
    })
  }
}
