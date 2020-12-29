// import React from 'react';
// //import { graphql, Link } from 'gatsby';
// import { Helmet } from 'react-helmet';
// //import kebabCase from 'lodash/kebabCase';
// import PropTypes from 'prop-types';
// import { Layout } from '@components';
// //import { IconZap } from '@components/icons';
// import styled from 'styled-components';
// //import { theme, mixins, media, Main } from '@styles';
// //const { colors, fontSizes, fonts } = theme;

// const StyledMainContainer = styled(Main)`
//   & > header {
//     text-align: center;
//     margin-bottom: 100px;

//     a {
//       &:hover,
//       &:focus {
//         cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>")
//             20 0,
//           auto;
//       }
//     }
//   }

//   footer {
//     ${mixins.flexBetween};
//     margin-top: 20px;
//     width: 100%;
//   }
// `;

// const PensievePage = ({ location, data }) => {
//   //const posts = data.allMarkdownRemark.edges;

//   return (
//     <Layout location={location}>
//       <Helmet>
//         <title>Pensieve | Brittany Chiang</title>
//         <link rel="canonical" href="https://brittanychiang.com/pensieve" />
//       </Helmet>

//       <StyledMainContainer>
//         <header>
//           <h1 className="big-title">Pensieve</h1>
//           <p className="subtitle">
//             <a
//               href="https://www.wizardingworld.com/writing-by-jk-rowling/pensieve"
//               target="_blank"
//               rel="noopener noreferrer">
//               a collection of memories
//             </a>
//           </p>
//         </header>

//       </StyledMainContainer>
//     </Layout>
//   );
// };

// PensievePage.propTypes = {
//   location: PropTypes.object.isRequired,
//   data: PropTypes.object.isRequired,
// };

// export default PensievePage;
