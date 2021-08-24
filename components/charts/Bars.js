import { Bar } from 'react-chartjs-2';

const rand = () => Math.round(Math.random() * 20 - 10);
const chartData = {
  // labels: ['row.map(col => `${col.value}`)', 'label2'],
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      // data: row.map(col => col.value),
      backgroundColor: 'rgb(15, 0, 132)',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      type: 'bar',

      label: '20%',
    },
    {
      // data: row.map(col => col.value),
      label: '',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
};
function Bars() {
  return (
    <div>
      <Bar data={chartData} width={100} height={50} options={{ maintainAspectRatio: false }} />
    </div>
  );
}

export default Bars;
