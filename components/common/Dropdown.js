import React from 'react';
// import CategoryCahnger from '../dashboard/cateorgy/CategoryCahnger';

export default function Dropdown() {
  //   const onChangeCategoryList = (catData) => {
  //     console.log(catData.id);
  //   };
  return (
    <div className="professionDropdownContainer">
      {/* <label htmlFor="country">country</label> */}
      <select className=" h-10 w-full rounded pr-4 bg-gray-active " name="country">
        <option value="Afganistan">Select... </option>
        <option value="Afganistan">Afghanistan</option>
        <option value="Albania">Albania</option>
        <option value="Algeria">Algeria</option>
        <option value="American Samoa">American Samoa</option>
      </select>
    </div>
  );
}
