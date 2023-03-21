import { HomeDescription, HomeHeader, HomeWrapper } from "./Home.styles";

const Home = () => (
  <HomeWrapper>
    <HomeHeader>
      Welcome to our cryptocurrency information website!
    </HomeHeader>
    <HomeDescription>
      <p>
        Our mission is to provide you with the latest news, analysis, and insights on the world of cryptocurrencies.
        Whether you are an experienced trader, a crypto enthusiast, or just starting to learn about this fascinating
        and rapidly evolving field, you will find valuable information and resources here to help you navigate the
        world of digital currencies.
      </p>
      <p>
        On our website, you will find up-to-date market data, including real-time price charts, trading volumes,
        and market capitalizations, as well as news and analysis from top industry experts. We cover all the major
        cryptocurrencies, including Bitcoin, Ethereum, Litecoin, and many more, as well as emerging altcoins
        and blockchain projects.
      </p>
      <p>
        We also provide educational resources, such as beginner's guides to buying and selling cryptocurrencies,
        explanations of key terms and concepts, and in-depth analysis of the latest trends and developments
        in the crypto world. Our goal is to help you become a well-informed and savvy investor in this exciting
        new asset class.
      </p>
      <p>
        At our website, we are committed to providing accurate, objective, and timely information to our readers.
        We believe that transparency and openness are key values in the world of cryptocurrencies, and we strive
        to embody those values in everything we do.
      </p>
      <p>
        Thank you for visiting our website, and we hope you find the information and resources here helpful and
        informative. If you have any questions or comments, please don't hesitate to reach out to us.
        We are always happy to hear from our readers!
      </p>
    </HomeDescription>
  </HomeWrapper>
);

export default Home;
