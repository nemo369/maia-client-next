/* eslint-disable prettier/prettier */
import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DASHBOARD_TYPE_CATEGORY } from '../../../src/utils/consts';
import { getLs, setLs } from '../../../src/utils/localStorge';
import CheckboxGroup from '../../common/CheckboxGroup';
import CategoryTooltip from './CategoryTooltip';

function CategoryCahnger({ onChangeCategoryList, length, isLabel }) {
  const { t } = useTranslation('common');
  const categoryGroups = [
    { name: t('מקצועות'), id: 'professions' },
    { name: t('לימודים'), id: 'studies' },
    // { name: t('משרות'), id: 'jobs' },
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
              {'משרות' === categoryType.name ? 'שיכולות להתאים לך' : 'שיכולים להתאים לך'}
            </h2>
            <Link href={`/${categoryType.id}`}>
              <a>

                <h3 className="text-base underline text-black/50">
                  (נמצאו&nbsp;
                  <span className="font-bold">
                    {length}
                &nbsp;
                    {'לימודים' === categoryType.name ? 'מסלולים' : categoryType.name}
                  </span>
              &nbsp;
                  {'משרות' === categoryType.name ? 'חדשות עבורך' : 'חדשים עבורך'}
                  )
                </h3>
              </a>
            </Link>
            <CategoryTooltip name={categoryType.name} />
          </div>
        </>
      )}
      <CheckboxGroup checks={categoryGroups} onChange={onChange} checkType={categoryType} />
    </div>
  );
}

export default CategoryCahnger;
