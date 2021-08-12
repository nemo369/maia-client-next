import { useEffect, useState } from 'react';
import CategoryCahnger from './cateorgy/CategoryCahnger';
import CategoryList from './cateorgy/CategoryList';
import { AppContext, useAppContext } from '../../src/context/state';
import VendorAPI from '../../src/services/vendor.service';

function Dashboard() {
  const { user } = useAppContext(AppContext);
  const [currentCategory, setcurrentCategory] = useState(null);

  const [categories, setcategories] = useState({
    professions: null,
    jobs: null,
    studies: null,
  });
  const [catList, setcatList] = useState([]);
  const onChangeCategoryList = (catData) => {
    setcurrentCategory(catData.id);
  };
  useEffect(() => {
    if (categories[currentCategory]) {
      setcatList([...categories[currentCategory]]);
    } else {
      setcatList(null);
    }
  }, [currentCategory]);
  useEffect(() => {
    const fetchAll = async () => {
      const [{ data: professions }, { data: studies }] = await Promise.all([
        VendorAPI.getCategorys(user.token, 'professions', { byUser: true }),
        VendorAPI.getCategorys(user.token, 'studies', { byUser: true }),
        // VendorAPI.getCategorys(user.token, 'jobs' ),
      ]);
      setcategories({
        professions: professions || [],
        jobs: [],
        studies: studies || [],
      });
      if (categories[currentCategory]) {
        setcatList([...categories[currentCategory]]);
      } else {
        setcatList([]);
      }
      setcurrentCategory(null);
      setcurrentCategory(currentCategory);
    };
    fetchAll();
  }, [user.token]);
  return (
    <section>
      <CategoryCahnger
        isLabel
        onChangeCategoryList={onChangeCategoryList}
        length={catList?.length || 0}
      />
      <CategoryList categories={catList} type={currentCategory} />
    </section>
  );
}

export default Dashboard;
