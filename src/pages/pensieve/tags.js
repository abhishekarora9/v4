import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
//import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { theme, mixins, Main } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledTagsContainer = styled(Main)`
  max-width: 1000px;

  h1 {
    margin-bottom: 50px;
  }
  ul {
    color: ${colors.lightSlate};
    li {
      font-size: ${fontSizes.xxl};

      a {
        ${mixins.inlineLink};
        color: ${colors.lightSlate};
        .count {
          color: ${colors.slate};
          font-family: ${fonts.SFMono};
          font-size: ${fontSizes.md};
        }
      }
    }
  }
`;

const TagsPage = ({
  data: {
    //allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location}>
    <Helmet title={title} />

    <StyledTagsContainer>
      <span className="breadcrumb">
        <span className="arrow">&larr;</span>
        <Link to="/pensieve">All memories</Link>
      </span>

      <h1>Tags</h1>
      <ul className="fancy-list"></ul>
    </StyledTagsContainer>
  </Layout>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({}),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
  location: PropTypes.object,
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
