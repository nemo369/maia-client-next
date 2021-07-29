import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import { DASHBOARD_TYPE_CATEGORY } from '../../../src/utils/consts';
import { getLs, setLs } from '../../../src/utils/localStorge';
import CheckboxGroup from '../../common/CheckboxGroup';

function CategoryCahnger({ onChangeCategoryList, length, isLabel }) {
  const { t } = useTranslation('common');
  const categoryGroups = [
    // { name: t('משרות'), id: 'jobs' },
    { name: t('לימודים'), id: 'studies' },
    { name: t('מקצועות'), id: 'professions' },
  ];
  const [categoryType, setcategoryType] = useState(categoryGroups[0]);
  useEffect(() => {
    const current = getLs(DASHBOARD_TYPE_CATEGORY);
    setcategoryType(current);
    onChangeCategoryList(current);
  }, [onChangeCategoryList]);
  const onChange = (id) => {
    const newCategory = categoryGroups.find((c) => c.id === id);
    setLs(DASHBOARD_TYPE_CATEGORY, newCategory);
    setcategoryType(newCategory);
    onChangeCategoryList(newCategory);
  };
  return (
    <div className="flex items-end">
      {isLabel && (
        <>
          <div className="flex items-end leading-none flex-grow flex-wrap">
            <h2 className="text-3xl text-black font-bold ml-2">
              {categoryType.name}
              &nbsp;
              {t('שיכולות להתאים לך')}
            </h2>
            <h3 className="text-base text-black/50">
              (נמצאו&nbsp;
              {length}
              &nbsp;
              {categoryType.name}
              &nbsp;חדשות עבורך)
            </h3>
          </div>
        </>
      )}
      <CheckboxGroup checks={categoryGroups} onChange={onChange} checkType={categoryType} />
    </div>
  );
}

export default CategoryCahnger;
