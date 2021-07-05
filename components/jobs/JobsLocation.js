import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import { AppContext } from '../../src/context/state';

const min = 5000;
const max = 100000;
const step = 5000;
const steps = [];
for (let index = min; index < max; index += step) {
  steps.push(index);
}
function JobsLocation({ handleChange, inputs }) {
  const { user } = useContext(AppContext);
  const { t } = useTranslation('common');
  return (
    <div className="flex">
      <h4 className="ml-4 text-lg font-bold">מיקום</h4>
      <div className="">
        <div className="flex items-center">
          <input
            className="bg-orange"
            type="radio"
            value="CHOOSE_CITY"
            name="locationType"
            id="choose-city"
            checked={'CHOOSE_CITY' === inputs.locationType}
            onChange={handleChange}
          />
          <label className="radio-label font-bold" htmlFor="choose-city">
            {t('איפה אתה גר')}
          </label>
          <input
            type="text"
            name="city"
            disabled
            defaultValue={user.street}
            className="bg-gray-disabled rounded-md h-[30px] px-2 mr-3 ml-6"
          />
          <input
            className="bg-orange"
            type="radio"
            value="WORK_FROM_HOME"
            name="locationType"
            id="work-from-home"
            checked={'WORK_FROM_HOME' === inputs.locationType}
            onChange={handleChange}
          />
          <label className="radio-label font-bold" htmlFor="work-from-home">
            {t('עבודה מהבית')}
          </label>
        </div>
        <div className="bar mt-3 w-full">
          <input
            className="w-full"
            type="range"
            min={min}
            max={max}
            step={step}
            value={inputs.range}
            name="range"
            onChange={handleChange}
          />
          <div className="flex justify-between">
            {steps.map((num) => (
              <span
                key={num}
                className={`mx-1 transition-all tabular-nums   ${
                  num === +inputs.range ? 'text-orange font-bold' : 'text-black/30'
                }`}
              >
                {num / 1000}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsLocation;
