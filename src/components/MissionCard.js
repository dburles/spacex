import PropTypes from 'prop-types';
import React from 'react';
import { Heading, Flex, Box, Card, Text } from 'rebass';
import YouTube from './lib/YouTube';

const MissionCard = props => {
  return (
    <Card
      bg="white"
      borderRadius={4}
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.15)"
      p={3}
    >
      <Heading fontSize={2}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.title}
        </a>
      </Heading>
      <Text fontSize={1} color="grey.7">
        🌎{props.site}
      </Text>
      <YouTube url={props.video} />
      <Flex>
        <Box flex={1}>
          <Text fontSize={1} color="grey.9">
            🚀 {props.rocket_name}
          </Text>
        </Box>
        <Box>
          <Text fontSize={1} color="grey.9">
            ⏱ {props.date}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};

MissionCard.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MissionCard;
