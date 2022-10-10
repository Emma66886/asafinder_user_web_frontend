import { Box, Skeleton } from "@chakra-ui/react";
import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";
import { getChartData } from "./apis";

export default function ChartComponent(props) {
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
  const [data, setData] = useState([]);
  console.log({ chartdaata: data });
  const chartData = data?.map((v) => {
    return {
      ...v,
      time: v?.timestamp,
      // time: new Date(v.timestamp).getTime(),
    };
  });
  const chartContainerRef = useRef();
  useEffect(() => {
    async function getData() {
      const chartD = await getChartData(token);
      setData(chartD);
    }
    getData();
  }, []);

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
      width: chartContainerRef.current.clientWidth,
      height: 320,
    });
    chart.timeScale().fitContent();

    chart.addCandlestickSeries().setData(chartData);
    // newSeries?.setData(chartData);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

  return (
    // <Skeleton w="100%" h="100%" isLoaded={data.length > 0}>
    <Box ref={chartContainerRef} w="100%" h="100%" zIndex="-1" />
    // </Skeleton>
  );
}
