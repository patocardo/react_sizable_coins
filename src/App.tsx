import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './home/Home';
import CoinList from './coin/CoinList/CoinList';
import CoinDetail from './coin/CoinDetail/CoinDetail';
import ErrorBoundary from 'ErrorBoundaries';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins" element={<CoinList />} />
            <Route path="/coins/:id" element={<CoinDetail />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
