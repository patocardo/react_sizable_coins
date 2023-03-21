import { render, screen, waitFor } from '@testing-library/react';
// import '@types/jest';
import 'jest';
import CoinList from '../CoinList/CoinList';

jest.mock('../coin.service', () => ({
  getCoins: jest.fn(() => ({
    success: true,
    data: [
      { id: 'btc', name: 'Bitcoin', symbol: 'BTC' },
      { id: 'eth', name: 'Ethereum', symbol: 'ETH' },
    ],
  })),
}));

describe('CoinList', () => {
  it('displays "Loading data" while waiting for getCoins response', async () => {
    render(<CoinList />);

    const loadingText = screen.getByText('Loading data');
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => {
      expect(loadingText).not.toBeInTheDocument();
    });
  });

  it('displays a list of coins with their name and symbol after getCoins response', async () => {
    render(<CoinList />);

    const loadingText = screen.getByText('Loading data');
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => {
      const coinLinks = screen.getAllByRole('listitem');
      expect(coinLinks).toHaveLength(2);

      const btcLink = screen.getByRole('link', { name: 'BTC' });
      expect(btcLink).toHaveAttribute('href', '/coins/btc');
      expect(btcLink).toHaveTextContent('Bitcoin');

      const ethLink = screen.getByRole('link', { name: 'ETH' });
      expect(ethLink).toHaveAttribute('href', '/coins/eth');
      expect(ethLink).toHaveTextContent('Ethereum');
    });
  });
});


/*
  it('updates the list when the user inputs text on the search field', async () => {
    render(<CoinList />);
    const input = screen.getByLabelText(/search coins/i);
    fireEvent.change(input, { target: { value: 'lite' } });

    // Wait for debounce
    await new Promise((r) => setTimeout(r, 600));

    const litecoin = screen.getByText(/litecoin/i);

    expect(litecoin).toBeInTheDocument();
  });

  it('updates the list every 3 seconds minimum', async () => {
    render(<CoinList />);
    const input = screen.getByLabelText(/search coins/i);
    fireEvent.change(input, { target: { value: 'btc' } });

    // Wait for debounce
    await new Promise((r) => setTimeout(r, 600));

    const bitcoin = screen.getByText(/bitcoin/i);

    // Fast-forward time by 2 seconds
    jest.advanceTimersByTime(2000);

    // No update should have happened yet
    expect(bitcoin).toBeInTheDocument();

    // Fast-forward time by another second
    jest.advanceTimersByTime(1000);

    // An update should have happened by now
    const updatedBitcoin = screen.getByText(/bitcoin/i);
    expect(updatedBitcoin).toBeInTheDocument();
  });
*/
