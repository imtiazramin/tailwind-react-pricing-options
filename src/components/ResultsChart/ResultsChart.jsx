import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData=  [
    { "id": 1, "name": "Student 1", "physics": 85, "chemistry": 78, "math": 92 },
    { "id": 2, "name": "Student 2", "physics": 74, "chemistry": 81, "math": 69 },
    { "id": 3, "name": "Student 3", "physics": 91, "chemistry": 88, "math": 95 },
    { "id": 4, "name": "Student 4", "physics": 67, "chemistry": 72, "math": 70 },
    { "id": 5, "name": "Student 5", "physics": 80, "chemistry": 76, "math": 84 },
    { "id": 6, "name": "Student 6", "physics": 93, "chemistry": 90, "math": 89 },
    { "id": 7, "name": "Student 7", "physics": 58, "chemistry": 64, "math": 61 },
    { "id": 8, "name": "Student 8", "physics": 72, "chemistry": 69, "math": 75 },
    { "id": 9, "name": "Student 9", "physics": 88, "chemistry": 85, "math": 91 },
    { "id": 10, "name": "Student 10", "physics": 79, "chemistry": 73, "math": 77 }
  ]



const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry"stroke='red'></Line>
                <Line dataKey="physics"stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;