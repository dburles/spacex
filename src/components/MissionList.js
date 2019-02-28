import React, { useState } from 'react';
import { Flex, Box, Button, Heading } from 'rebass';
import { useQuery } from '../lib/graphql';
import MissionCard from './MissionCard';

const LIMIT = 9;

const MissionList = () => {
  const [limit, setLimit] = useState(LIMIT);
  const { data } = useQuery(
    'https://api.spacex.land/graphql',
    /* GraphQL */ `
      query launchesPast {
        launchesPast(limit: ${limit}) {
          mission_name
          launch_date_local
          launch_site {
            site_name
          }
          links {
            article_link
            video_link
          }
          rocket {
            rocket_name
          }
        }
      }
    `,
  );

  return (
    <>
      <Heading color="white" my={4}>
        SpaceX Missions
      </Heading>
      <Flex mx={-2} flexWrap="wrap">
        {data.launchesPast.map(launch => (
          <Box key={launch.mission_name} width={[1, 1 / 3]} py={2} px={2}>
            <MissionCard
              title={launch.mission_name}
              site={launch.launch_site.site_name}
              rocket_name={launch.rocket.rocket_name}
              video={launch.links.video_link}
              date={launch.launch_date_local}
              link={launch.links.article_link}
            />
          </Box>
        ))}
      </Flex>
      <Flex justifyContent="center" my={4}>
        <Button color="grey.9" onClick={() => setLimit(limit + LIMIT)}>
          Load more
        </Button>
      </Flex>
    </>
  );
};

export default MissionList;
