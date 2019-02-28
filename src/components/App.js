import { Router } from '@reach/router';
import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Layout from './Layout';
import GlobalStyle from './lib/GlobalStyle';
import Spinner from './lib/Spinner';
import MissionsOverview from './MissionsOverview';

const SuspenseMissionsOverview = () => (
  <Suspense maxDuration={2000} fallback={<Spinner full />}>
    <MissionsOverview />
  </Suspense>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Layout>
          <Router>
            <SuspenseMissionsOverview path="/" />
          </Router>
        </Layout>
      </>
    </ThemeProvider>
  );
};

App.propTypes = {};

export default App;
