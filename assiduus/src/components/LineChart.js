import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as chartjs} from 'chart.js/auto';

function LineChart({chartData}){
  const dummy= chartjs;
  console.log(dummy);
    const options = {
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
        scales: {
          x: {
            grid: {
              display: false, // Hide x-axis grid lines
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false, // Hide y-axis grid lines
            },
            ticks: {
              display: false, // Hide y-axis labels
            },
          },
        },
        elements: {
          line: {
            borderColor: 'green', // Set the line color to green
            tension: 0.4, // Set the curve tension
          },
        },
      };
    return <Line data={chartData}  options={options}/>

}

export default LineChart;