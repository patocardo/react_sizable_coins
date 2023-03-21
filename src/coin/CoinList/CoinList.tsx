import { useRef, useCallback, useState, useEffect } from 'react';
import { debounce } from 'lodash'
import { useSetRecoilState } from 'recoil';
import { errorPopUpState } from '@components/ErrorPopUp/errorPopUp.state';
import type { coinListElementType } from './CoinList.types';
import { getCoins } from '../coin.service';
import { TextInputStyle, Card, LoadingDots } from '@components/index';
import { CoinListContainer, CoinGrid, CardLink } from './CoinList.style';

const CoinList = () => {
  const [coins, setCoins] = useState<coinListElementType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setErrorObj = useSetRecoilState(errorPopUpState);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const debouncedSearch = useCallback(
    debounce(async (searchTerm: string) => {
      setIsLoading(true);
      const { error, success, data } = await getCoins(searchTerm);
      if(!success) {
        setErrorObj({
          message: 'There was an error in the service. Please try again later',
          isOpen: true,
          cause: error || "couldn't find the cause",
        });
        return;
      }
      setIsLoading(false);
      setCoins(data);
    }, 500),
    []
  );

  const handleSearch = useCallback(() => {
    const searchTerm = searchInputRef.current?.value || '';
    debouncedSearch(searchTerm);
  }, [debouncedSearch]);

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <CoinListContainer role="region" aria-label="Coin List" aria-busy={isLoading}>
      <TextInputStyle
        type="text"
        ref={searchInputRef}
        onChange={handleSearch}
        placeholder="search coins"
        aria-label="Search coins"
      />
      {
        isLoading ? (
          <LoadingDots text="Loading data" />
        ) : (
          <CoinGrid role="list">
            {coins.map(({id, name, symbol}) => (
              <CardLink to={`/coins/${id}`} key={id} role="listitem">
                <Card title={symbol}>
                  {name}
                </Card>
              </CardLink>
            ))}
          </CoinGrid>
        )
      }

    </CoinListContainer>
  );
}

export default CoinList;