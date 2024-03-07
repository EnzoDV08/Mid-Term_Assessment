import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

   
    const randomData = Array.from({ length: 6 }, () => getRandomInt(10, 50)); 

    const data = {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [
            {
                label: 'Goals Scored',
                data: randomData,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Goals Conceded',
                data: randomData.map(num => getRandomInt(num - 5, num + 5)), 
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h1>Manchester United Season Statistics</h1>
            <Bar options={options} data={data} />
        </div>
    );
};

export default BarChart;