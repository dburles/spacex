import PropTypes from 'prop-types';
import React from 'react';
import { Box } from 'rebass';

const Layout = props => {
  return (
    <Box p={3} mx={6}>
      {props.children}
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
