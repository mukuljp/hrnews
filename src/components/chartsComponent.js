import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
const ChartsComponent = ({
 options
}) => {
  const highchartOptions = {
      chart:{
        backgroundColor:'#f5f5ee',
        plotBackgroundColor:'#f5f5ee',
        marginRight:50
      }
   ,
    title: {
      text: "News Vs Points"
    },
    xAxis:{
        categories:options.categories,
        title:{
            text:'Story Ids'
        }
    },
    yAxis:{
      
        title:{
            text:'Up Votes'
        }
    },
    series: [
      {
        name:"Up Votes",
        data: options.data
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={highchartOptions} />;
};

export default ChartsComponent;
