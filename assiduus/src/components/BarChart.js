import React from 'react'
import { Bar } from 'react-chartjs-2';
// import {Chart as chartjs} from 'chart.js/auto';
function BarChart  ({chartData}) {
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
          bar: {
            backgroundColor: 'green',
                  borderRadius: 15,
          },
        },
        
      };
 
    return   <Bar data={chartData}  options={options}/>;
      
};
 
export default BarChart;