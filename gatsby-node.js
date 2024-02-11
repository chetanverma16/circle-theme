const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for blog and service pages in one go
  const result = await graphql(`
  {
    allMarkdownRemark(
      filter: {
        frontmatter: { path: { regex: "/\\/(blog|services)\\//" } }
      }
    ) {
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


  // Error handling for GraphQL query
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Iterate over all nodes to create pages
  result.data.allMarkdownRemark.nodes.forEach((node) => {
    // Determine the template based on the path
    let template;
    if (node.frontmatter.path.includes("/blog/")) {
      template = "./src/templates/blogTemplate.js";
    } else if (node.frontmatter.path.includes("/services/")) {
      template = "./src/templates/serviceTemplate.js";
    } else {
      // Skip if the path doesn't match expected patterns
      return;
    }

    // Ensure node is defined and has the necessary structure
    if (!node || !node.id) {
      throw new Error("Node is undefined or missing an ID.");
    }

    createPage({
      path: node.frontmatter.path,
      component: path.resolve(template),
      context: {
        id: node.id,
      },
    });
  });
};
