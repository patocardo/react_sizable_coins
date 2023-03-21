import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { errorPopUpState } from '@components/ErrorPopUp/errorPopUp.state';
import { moneyFormatter, flatFormatter } from '@helpers/numbers'
import { CoinType } from './CoinDetail.types'
import {
  CoinDetailWrapper,
  CoinDetailHeader,
  CoinMark,
  CoinSymbol,
  CoinInfo,
  CoinDescription,
} from './CoinDetail.styles'
import { getCoin } from 'coin/coin.service'
import { IconButton, ExternalImage, LoadingDots } from '@components/index';

const emptyCoin = {
  image: '',
  symbol: '',
  name: '',
  price: 0,
  supply: 0,
  description: '',
}

const CoinDetail = () => {
  const { id } = useParams<{ id: string }>(); 
  const [details, setDetails] = useState<CoinType>(emptyCoin);
  const setErrorObj = useSetRecoilState(errorPopUpState);

  const loadCoinData = async (forceRefresh: boolean) => {
    if (!id) return;
    const localItem = `coin-${id}`;
    if(!forceRefresh) {
      const cachedData = localStorage.getItem(localItem);
      if (cachedData) {
        setDetails(JSON.parse(cachedData));
        return;
      }
    }

    const { success, error, data} = await getCoin(id);
    if(!success) {
      setErrorObj({
        message: 'There was an error in the service. Please try again later',
        isOpen: true,
        cause: error || "couldn't find the cause",
      });
      return;
    }

    const newDetails = {
      image: data.image?.small || '',
      symbol: data.symbol,
      name: data.name,
      price: data.market_data?.current_price?.usd || 0,
      supply: data.market_data?.circulating_supply|| 0,
      description: data.description?.en || 'No description available',
    };
    setDetails(newDetails);
    localStorage.setItem(localItem, JSON.stringify(newDetails));
  };

  useEffect(() => {
    loadCoinData(false);
  }, [id]);

  return (
    <CoinDetailWrapper role="region" aria-label="Coin Details">
      {details.symbol ? (
        <>
          <CoinDetailHeader aria-labelledby="coin-header">
            <CoinMark>
              <ExternalImage width={50} height={50} alt={details.name} src={details.image} />
              <div>
                <CoinSymbol>{details.symbol}</CoinSymbol>
                <CoinInfo>{details.name}</CoinInfo>
              </div>
            </CoinMark>
            <div>
              <IconButton
                icon={faRotate}
                onClick={() => loadCoinData(true) }
                aria-label="Reload Coin Data"
              />
            </div>
          </CoinDetailHeader>
          <CoinInfo>PRICE:&nbsp;{
            details.price
              ? moneyFormatter.format(details.price)
              : 'information not found' 
          }</CoinInfo>
          <CoinInfo>SUPPLY:&nbsp;{
            details.supply
              ? flatFormatter.format(details.supply)
              : 'information not found' 
          }</CoinInfo>
          <CoinDescription aria-live="assertive">{details.description}</CoinDescription>
        </>
      ) : (
        <LoadingDots text="Loading coin information" />
      )}
    </CoinDetailWrapper>
  );
};

export default CoinDetail
