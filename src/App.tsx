import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import ErrorBoundary from 'ErrorBoundaries';
import { LoadingDots } from '@components/index';

const Home = lazy(() => import('./home/Home'));
const CoinList = lazy(() => import('./coin/CoinList/CoinList'));
const CoinDetail = lazy(() => import('./coin/CoinDetail/CoinDetail'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Suspense fallback={<LoadingDots text="Loading page" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/coins" element={<CoinList />} />
              <Route path="/coins/:id" element={<CoinDetail />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
