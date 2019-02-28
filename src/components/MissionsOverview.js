import React, { useState } from 'react';
import { useQuery } from '../lib/graphql';
import MissionList from './MissionList';

const LIMIT = 9;

const launchesPastQuery = limit => /* GraphQL */ `
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
`;

const launchesUpcomingQuery = limit => /* GraphQL */ `
  query launchesUpcoming {
    launchesUpcoming(limit: ${limit}) {
      mission_name
      launch_date_local
      launch_site {
        site_name
      }
      rocket {
        rocket_name
      }
    }
  }
`;

const MissionsOverview = () => {
  const [pastLimit, setPastLimit] = useState(LIMIT);
  const [upcomingLimit, setUpcomingLimit] = useState(LIMIT);
  const {
    data: { launchesUpcoming },
  } = useQuery(
    'https://api.spacex.land/graphql',
    launchesUpcomingQuery(upcomingLimit),
  );
  const {
    data: { launchesPast },
  } = useQuery('https://api.spacex.land/graphql', launchesPastQuery(pastLimit));

  return (
    <>
      <MissionList
        title="Upcoming"
        launches={launchesUpcoming}
        loadMore={() => setUpcomingLimit(upcomingLimit + LIMIT)}
      />
      <MissionList
        title="Past missions"
        launches={launchesPast}
        loadMore={() => setPastLimit(pastLimit + LIMIT)}
      />
    </>
  );
};

export default MissionsOverview;
