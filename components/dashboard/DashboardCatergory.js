import { useState } from 'react';
import CategoryCahnger from './cateorgy/CategoryCahnger';
import CategoryList from './cateorgy/CategoryList';

function Dashboard({ allCategories }) {
  const [catList, setcatList] = useState([]);
  const onChangeCategoryList = (catData) => {
    setcatList(allCategories[catData.id]);
    //set new liost
  };
  return (
    <section>
      <CategoryCahnger onChangeCategoryList={onChangeCategoryList} />
      <CategoryList categories={catList} />
    </section>
  );
}

export default Dashboard;
