/* eslint-disable jsx-a11y/label-has-associated-control */
const ConditionsPopup = () => (
  <div className="absolute  w-1/2  h-1/2 bg-gray-600 z-40 conditionPop rounded-lg">
    <div className="grid grid-cols-2 mt-2">
      <button type="button">exit</button>
      <span />
      <h1 className="font-black text-3xl leading-8 text-center text-gray-mid col-start-1 col-end-3 mb-3">
        תנאי תקנון:
      </h1>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat veniam dolore inventore
        amet natus illum maiores, aperiam itaque officia ipsam at soluta velit asperiores animi ea
        nulla optio eius.
      </p>
    </div>
  </div>
);

export default ConditionsPopup;
