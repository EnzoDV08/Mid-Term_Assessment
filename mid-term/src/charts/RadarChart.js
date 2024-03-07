import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';


ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels: ['Goals', 'Assists', 'Tackles', 'Passes', 'Shots', 'Saves', 'Interceptions'], 
    datasets: [
      {
        label: 'Ronaldo',
        data: [65, 59, 90, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Rasmus Højlund',
        data: [28, 48, 40, 19, 96, 27, 100], 
        backgroundColor: 'rgba(54, 162, 235, 0.2)', 
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }
    ],
  };

  const options = {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  };

  return (
    <>
      <h1>Soccer Radar Chart</h1>
      <Radar data={data} options={options} />
    </>
  );
};

export default RadarChart;

