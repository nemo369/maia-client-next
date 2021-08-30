import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { AppContext, useAppContext } from '../../src/context/state';
import { getChartColors } from '../../src/utils/util';

function ProfileDoughnut() {
  const { profile } = useAppContext(AppContext);
  const [labels, setlabels] = useState([]);
  const [datasets, setDataset] = useState([{}]);
  useEffect(() => {
    if (!profile) return;
    const fields = [
      profile.vendor_profile.mainField,
      profile.vendor_profile.secondField,
      profile.vendor_profile.thirdField,
    ];
    setlabels(fields.map((field) => field.displayName));
    setDataset([
      {
        label: false,
        data: fields.map((field) => field.value * 100),
        backgroundColor: fields.map((field) => getChartColors(field.code)),
      },
    ]);
  }, [profile]);
  const options = {
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
      <Doughnut
        id="ProfileDoughnut"
        data={{
          labels,
          datasets,
        }}
        height="143px"
        width="122px"
        options={options}
      />
    </div>
  );
}

export default ProfileDoughnut;
