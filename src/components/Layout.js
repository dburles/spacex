import PropTypes from 'prop-types';
import React from 'react';
import { Box, Heading } from 'rebass';

const Layout = props => {
  return (
    <Box p={3} mx={6}>
      <Heading color="white" my={4}>
        SpaceX Missions
      </Heading>
      {props.children}
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
