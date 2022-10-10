import axios from "axios";
export async function getTokenHistory(token_asa) {
  try {
    let algoPriceHistory = await axios(
      `https://algocharts.net/api/historic/?asset_in=${token_asa}&asset_out=0&market=&chart=1mon`
    );
    let usdcPriceHistory = await axios(
      `https://algocharts.net/api/historic/?asset_in=${token_asa}&asset_out=31566704&market=&chart=1mon`
    );
    algoPriceHistory = algoPriceHistory.data.data;
    usdcPriceHistory = usdcPriceHistory.data.data;
    // console.log({ algoPriceHistory, usdcPriceHistory });
    return { algoPriceHistory, usdcPriceHistory };
  } catch (e) {
    console.log(e);
  }
}
export async function getTokenPrices(token_asa) {
  try {
    let tokenprice = await axios.get(
      `https://free-api.vestige.fi/asset/${token_asa}/price`
    );
    const priceHist = await axios.get(
      `https://free-api.vestige.fi/asset/${token_asa}/prices/simple/1D`
    );
    const h24change =
      ((priceHist.data[0].price -
        priceHist.data[priceHist.data.length - 1].price) /
        priceHist.data[priceHist.data.length - 1].price) *
      100;
    const algotokenPriceData = { price: tokenprice.data.USD, h24change };
    const usdAlgoTokenPriceData = { price: tokenprice.data.price, h24change };
    console.log({ algotokenPriceData, usdAlgoTokenPriceData });
    return { algotokenPriceData, usdAlgoTokenPriceData };
  } catch (e) {
    console.log(e);
  }
}

export async function getAllTokensData(token_asa) {
  const prices = await getTokenPrices(token_asa);
  // const history = await getTokenHistory(token_asa);
  const history = "";
  //   console.log({ prices, history });
  return { prices, history };
}

export async function getPricesAndTokenInfo(token_asa) {
  const token_price_data = await getAllTokensData(token_asa);
  const token_info_data = await axios.get(``);
}

export async function getTokenInfo(asa_id) {
  try {
    const tokenInfo = await axios.get(
      `https://free-api.vestige.fi/asset/${asa_id}`
    );
    console.log({ tokenInfo });
    return tokenInfo.data;
  } catch (e) {
    return {};
  }
}

export async function getChartData(token_asa) {
  try {
    const chartData = await axios(
      `https://algocharts.net/api/historic-ohlc/?asset_in=${token_asa}`
    );
    console.log(chartData.data);
    return chartData.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
