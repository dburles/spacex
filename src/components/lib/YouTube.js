import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const getYouTubeVideoId = url => url.split('?v=')[1];

const IFrame = styled.iframe`
  ${space}
`;

const YouTube = props => {
  return (
    <IFrame
      src={`https://www.youtube.com/embed/${getYouTubeVideoId(props.url)}`}
      width="100%"
      my={3}
      height="250px"
    />
  );
};

YouTube.propTypes = {
  url: PropTypes.string.isRequired,
};

export default YouTube;
