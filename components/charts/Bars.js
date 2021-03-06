import { useState, useEffect } from 'react';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import { AppContext, useAppContext } from '../../src/context/state';
import { getChartColors } from '../../src/utils/util';

Chart.register(ChartDataLabels);
const riasec = ['r', 'i', 'a', 's', 'e', 'c'];
function Bars(props) {
  const { height, width } = props;
  const { profile } = useAppContext(AppContext);
  const [labels, setlabels] = useState([]);
  const [datasets, setDataset] = useState([{}]);
  useEffect(() => {
    if (!profile || !profile.vendor_profile) return;
    const { vendor_profile: data } = profile;
    const fields = data.userProfileResults.filter((field) => riasec.includes(field.code));
    // setLabelTexts(fields.map((field) => field.name.replace(/[w^\x00-\x7F]/g, '')));
    // eslint-disable-next-line no-control-regex
    setlabels(fields.map((field) => field.name.replace(/[w^\x00-\x7F]/g, '')));
    setDataset([
      {
        labels: '',
        data: fields.map((field) => (field.value * 100).toFixed(0)),
        backgroundColor: fields.map((field) => getChartColors(field.code)),
      },
    ]);
  }, [profile]);
  const options = {
    animation: false,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 0,
          },
        },
      },
      datalabels: {
        display: true,
        color: 'white',
        align: 'center',
        anchor: 'center',
        font: { size: '10' },
        textAlign: 'center',
      },
    },
  };

  return (
    <>
      <div className="grid-cols-1 grid grid-cols-2 grid grid-cols-3 grid grid-cols-4 grid grid-cols-5 grid grid-cols-6 grid grid-cols-7">
        <Bar data={{ datasets, labels }} width={width} height={height} options={options} />
      </div>
    </>
  );
}

export default Bars;
