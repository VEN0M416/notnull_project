import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
)

const options={
  plugins:{
    tooltip:{
      enabled: true,
      intersect: false,
      backgroundColor:'#083344',
      displayColors: false,
    },
    legend: false,
  },
  scales: {
    x:{
      grid:{
        display: false
      },
      border: {
        color: "#154d62",
        width: "2"
      },
      ticks:{
        color: "#22d0ee"
      }
    },
    y:{
      min: 0,
      grid:{
        display: false
      },
      border: {
        color: "#154d62",
        width: "2"
      },
      ticks:{
        color: "#22d0ee",
        callback: function(value, index, values) {
          return value + ' млн ₽'; 
        },
      }
    },  
  },
  elements: {
    point: {
      hoverRadius: 5,
      radius: 0,
      borderColor: '#22d0ee',
      backgroundColor: '#22d0ee'
    },
    line:{
      borderColor: '#22d0ee' 
    }
  },
  interaction: {
    intersect: false,
    mode: 'nearest',
  },
}

function LineChart({ chartData }) {
  return (
    <div>
      <Line data={chartData} options={options}/>
    </div>
  );
}
export default LineChart;