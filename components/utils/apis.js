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
    let algotokenPriceData = await axios(
      `https://algocharts.net/apiv2/?asset_in=${token_asa}&asset_out=0`
    );
    let usdAlgoTokenPriceData = await axios(
      `https://algocharts.net/apiv2/?asset_in=${token_asa}&asset_out=31566704`
    );
    algotokenPriceData = {
      h24change:
        ((algotokenPriceData.data.data[0] - algotokenPriceData.data.data[1]) /
          algotokenPriceData.data.data[1]) *
        100,
      price: algotokenPriceData.data.data[0],
    };
    usdAlgoTokenPriceData = {
      h24change:
        ((usdAlgoTokenPriceData.data.data[0] -
          usdAlgoTokenPriceData.data.data[1]) /
          usdAlgoTokenPriceData.data.data[1]) *
        100,
      price: usdAlgoTokenPriceData.data.data[0],
    };
    // console.log();
    // console.log({ algotokenPriceData, usdAlgoTokenPriceData });
    return { algotokenPriceData, usdAlgoTokenPriceData };
  } catch (e) {
    console.log(e);
  }
}

export async function getAllTokensData(token_asa) {
  const prices = await getTokenPrices(token_asa);
  const history = await getTokenHistory(token_asa);
  //   console.log({ prices, history });
  return { prices, history };
}

export async function getPricesAndTokenInfo(token_asa) {
  const token_price_data = await getAllTokensData(token_asa);
  const token_info_data = await axios.get(``);
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
