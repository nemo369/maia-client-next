import { Doughnut } from 'react-chartjs-2';

const StageOneBottom = () => (
  <Doughnut
    data={{
      labels: ['Red', 'Blue', 'Green', 'Purple'],
      datasets: [
        {
          label: '# of votes',
          data: [5, 5, 5, 5],
          backgroundColor: ['red', 'green', 'blue', 'yellow'],
        },
      ],
    }}
    height="100px"
    width="100px"
    options={{
      maintainAspectRatio: false,
      legend: {
        label: {
          fontSize: 200,
        },
      },
    }}
  />
);
export default StageOneBottom;
