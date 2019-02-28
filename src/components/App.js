import { Router } from '@reach/router';
import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Layout from './Layout';
import GlobalStyle from './lib/GlobalStyle';
import Spinner from './lib/Spinner';
import MissionList from './MissionList';

const SuspenseMissionList = () => (
  <Suspense maxDuration={2000} fallback={<Spinner full />}>
    <MissionList />
  </Suspense>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Layout>
          <Router>
            <SuspenseMissionList path="/" />
          </Router>
        </Layout>
      </>
    </ThemeProvider>
  );
};

App.propTypes = {};

export default App;
