import React from "react";
import NewsItem from "./newsItem";

const Loader = ({}) => {
  return (
    <div className="loading">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{margin: 'auto',background: 'transparent',display: 'block','shapeRendering': 'auto'}}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="79.8352" cy="50.2268" r="5" fill="#503f32">
          <animate
            attributeName="cx"
            values="80;59.270509831248425"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="cy"
            values="50;78.53169548885461"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="fill"
            values="#503f32;#9a2346"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle cx="59.0039" cy="78.4451" r="5" fill="#9a2346">
          <animate
            attributeName="cx"
            values="59.270509831248425;25.72949016875158"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="cy"
            values="78.53169548885461;67.6335575687742"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="fill"
            values="#9a2346;#d28d4f"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle cx="25.7295" cy="67.3533" r="5" fill="#d28d4f">
          <animate
            attributeName="cx"
            values="25.72949016875158;25.729490168751575"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="cy"
            values="67.6335575687742;32.366442431225806"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="fill"
            values="#d28d4f;#dbae1d"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle cx="25.9961" cy="32.2798" r="5" fill="#dbae1d">
          <animate
            attributeName="cx"
            values="25.729490168751575;59.27050983124842"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="cy"
            values="32.366442431225806;21.46830451114539"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="fill"
            values="#dbae1d;#477187"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle cx="59.4353" cy="21.6951" r="5" fill="#477187">
          <animate
            attributeName="cx"
            values="59.27050983124842;80"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="cy"
            values="21.46830451114539;49.99999999999999"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="fill"
            values="#477187;#503f32"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
          ></animate>
        </circle>
      </svg>
    </div>
  )
};

export default Loader;
