import PropTypes from 'prop-types';
import React from 'react';
import { Flex, Box, Button, Heading } from 'rebass';
import MissionCard from './MissionCard';

const MissionList = props => {
  return (
    <>
      <Heading fontSize={3} color="grey.3">
        {props.title}
      </Heading>
      <Flex mx={-2} flexWrap="wrap">
        {props.launches.map(launch => (
          <Box key={launch.mission_name} width={[1, 1 / 3]} py={2} px={2}>
            <MissionCard
              title={launch.mission_name}
              site={launch.launch_site.site_name}
              rocket_name={launch.rocket.rocket_name}
              video={launch.links && launch.links.video_link}
              link={launch.links && launch.links.article_link}
              date={launch.launch_date_local}
            />
          </Box>
        ))}
      </Flex>
      <Flex justifyContent="center" my={4}>
        <Button color="grey.9" onClick={() => props.loadMore()}>
          Load more
        </Button>
      </Flex>
    </>
  );
};

MissionList.propTypes = {
  title: PropTypes.string.isRequired,
  launches: PropTypes.arrayOf(
    PropTypes.shape({
      links: PropTypes.shape({
        video_link: PropTypes.string,
        article_link: PropTypes.string,
      }),
      title: PropTypes.string.isRequired,
      site: PropTypes.string.isRequired,
      video: PropTypes.string,
      rocket_name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ),
  loadMore: PropTypes.func.isRequired,
};

export default MissionList;
