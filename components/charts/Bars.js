import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { AppContext, useAppContext } from '../../src/context/state';
import { getChartColors } from '../../src/utils/util';

const riasec = ['r', 'i', 'a', 's', 'e', 'c'];
function Bars(props) {
  const { height, width } = props;
  const { profile } = useAppContext(AppContext);
  const [labelTexts, setLabelTexts] = useState([]);
  const [labels, setlabels] = useState([]);
  const [datasets, setDataset] = useState([{}]);
  useEffect(() => {
    if (!profile || !profile.vendor_profile) return;
    const { vendor_profile: data } = profile;
    const fields = data.userProfileResults.filter((field) => riasec.includes(field.code));
    // eslint-disable-next-line no-control-regex
    setLabelTexts(fields.map((field) => field.name.replace(/[w^\x00-\x7F]/g, '')));
    setlabels(fields.map((field) => `${(field.value * 100).toFixed(0)}%`));
    setDataset([
      {
        label: '',
        data: fields.map((field) => field.value * 100),
        backgroundColor: fields.map((field) => getChartColors(field.code)),
      },
    ]);
  }, [profile]);
  const options = {
    animation: false,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'bottom',
    },

    plugins: {
      legend: {
        labels: {
          font: {
            size: 0,
          },
        },
      },
    },
  };

  return (
    <>
      <div className="grid-cols-1 grid grid-cols-2 grid grid-cols-3 grid grid-cols-4 grid grid-cols-5 grid grid-cols-6 grid grid-cols-7">
        <Bar
          data={{
            labels,
            datasets,
          }}
          width={width}
          height={height}
          options={options}
        />
      </div>

      <div className={`grid pl-6 grid-cols-${labelTexts.length}`}>
        {labelTexts.map((text) => (
          <span key={text} className="text-center">
            {text}
          </span>
        ))}
      </div>
    </>
  );
}

export default Bars;
