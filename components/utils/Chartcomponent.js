import { Box, Skeleton } from "@chakra-ui/react";
import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";
import { getChartData } from "./apis";

export default function ChartComponent(props) {
  const stopUseEffect = useRef(false);
  const {
    token,
    colors: {
      backgroundColor = "black",
      lineColor = "#2962FF",
      textColor = "white",
      areaTopColor = "#2962FF",
      areaBottomColor = "rgba(41, 98, 255, 0.28)",
    },
  } = props;
  const [data, setData] = useState([
    {
      time: "2022-10-10",
    },
  ]);
  console.log({ chartdaata: data });

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
        areaBottomColor,
        areaTopColor,
      },
      grid: { horzLines: { visible: false }, vertLines: { visible: false } },
      width: chartContainerRef.current.clientWidth,
      height: 320,
    });
    chart.timeScale().fitContent();

    (async () => {
      chart.timeScale().fitContent();
      try {
        const chartD = await getChartData(token);
        console.log({ chartD });
        const lineSeries = chart.addLineSeries();
        lineSeries.setData(chartD);
      } catch (e) {
        console.log(e);
      }
    })();
    // if (!stopUseEffect.current) {
    //   (async () => {
    //     chart.timeScale().fitContent();
    //     const chartD = await getChartData(token);
    //     console.log({ chartD });
    //     chart?.addCandlestickSeries().setData(chartD);
    //   })();
    // addCandles();
    window.addEventListener("resize", handleResize);
    // }
    // stopUseEffect.current = true;
    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
    data,
  ]);

  return (
    // <Skeleton w="100%" h="100%" isLoaded={data.length > 0}>
    <Box
      ref={chartContainerRef}
      style={{ borderRadius: "10px" }}
      w="100%"
      h="100%"
      zIndex="-1"
    />
    // </Skeleton>
  );
}
