// Description: This file is used to create pages dynamically using the createPages API.
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            path
            date
            author
            humanDate
            subtitle
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    // Ensure node is defined and has the necessary structure
    if (!node || !node.id) {
      throw new Error("Node is undefined or missing an ID.");
    }

    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`./src/templates/blogTemplate.js`),
      context: {
        id: node.id,
      },
    });
  });
};
