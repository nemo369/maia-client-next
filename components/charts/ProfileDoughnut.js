import { useState, useEffect } from 'react';
import 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';
import { AppContext, useAppContext } from '../../src/context/state';
import { getChartColors } from '../../src/utils/util';

const options = {
  animation: false,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      color: 'white',
      display: true,
      align: 'center',
      anchor: 'center',
      font: { size: '7' },
      textAlign: 'center',
      formatter: (val, ctx) => ctx.chart.data.labels[ctx.dataIndex],
    },
    legend: {
      labels: {
        font: {
          size: 0,
        },
      },
    },
  },
  zoomOutPercentage: 90,
};

function ProfileDoughnut() {
  const { profile } = useAppContext(AppContext);
  const [datasets, setDataset] = useState([{}]);
  const [labels, setlabels] = useState([]);
  useEffect(() => {
    if (!profile || !profile.vendor_profile) return;
    const fields = [
      profile.vendor_profile.mainField,
      profile.vendor_profile.secondField,
      profile.vendor_profile.thirdField,
    ];
    console.log(fields);
    setlabels(fields.map((field) => field.displayName));
    setDataset([
      {
        labels: fields.map((field) => field.displayName),
        data: fields.map((field) => field.value * 100),
        backgroundColor: fields.map((field) => getChartColors(field.code)),
        borderWidth: 1,
      },
    ]);
  }, [profile]);

  return (
    <div>
      <Doughnut
        id="ProfileDoughnut"
        data={{ datasets, labels }}
        height="143px"
        width="122px"
        options={options}
      />
    </div>
  );
}

export default ProfileDoughnut;
