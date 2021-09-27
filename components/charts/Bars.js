import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { AppContext, useAppContext } from '../../src/context/state';
import { getChartColors } from '../../src/utils/util';

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
    setlabels(fields.map((field) => field.name));
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
    <div>
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
  );
}

export default Bars;
