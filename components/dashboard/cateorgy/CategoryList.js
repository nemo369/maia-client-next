import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';
import { trimText } from '../../../src/utils/util';
import Button from '../../common/Button';
import Loader from '../../common/Loader';
import CategoryPercentage from '../../profile/CategoryPercentage';

const CategoryLi = ({ cat, type, disabled }) => {
  const { t } = useTranslation('common');
  const [isHoverd, setisHoverd] = useState(false);
  return (
    <li
      className="bg-white rounded-[10px] border border-[rgba(151,151,151,0.13)]
  px-[18px] py-3 relative overflow-hidden hover:transform "
      onMouseEnter={() => setisHoverd(true)}
      onMouseLeave={() => setisHoverd(false)}
    >
      <div
        className={`fliped absolute w-full h-full transition-all bg-black/30 top-0 right-0 flex items-center justify-center ${
          isHoverd ? 'z-10 opacity-100' : 'z-0 opacity-0'
        }`}
      >
        <Link href={`/${type}/${cat.id}`}>
          <a>
            <Button
              type="button"
              status="main"
              className="px-6"
              name={t('לחץ לצפייה')}
              disabled={disabled}
            />
          </a>
        </Link>
      </div>
      <div className={`transition-all ${isHoverd ? 'filter blur' : 'blur-none'}`}>
        <div className={`${cat.percentage ? 'flex flex-row-reverse' : ''}`}>
          {cat.percentage && <CategoryPercentage percentage={cat.percentage} className="mr-auto" />}
          <div>
            {cat.group && <h4 className="text-gray-active mb-2">{cat.group}</h4>}
            <h3 className="job-title font-bold text-[18px] text-[#333333]">
              {trimText(cat.title, 30)}
            </h3>
          </div>
        </div>
        <div className="dash border-b-[1px] mt-[10px] border-dashed border-[#979797] opacity-20 w-full h-1" />
        <p className="text-[#333333] opacity-70 text-[16px] mt-[10px]">
          {cat.full_data?.city && (
            <strong className="block mb-1">
              הלימודים מתקיימים ב:&nbsp;
              {cat.full_data?.city}
            </strong>
          )}
          {trimText(cat.description, 140)}
        </p>
      </div>
    </li>
  );
};

function CategoryList({ categories, type, disabled }) {
  if (!categories || !Array.isArray(categories)) {
    return (
      <div className="flex items-center justify-center min-h-[430px]">
        <Loader loading />
      </div>
    );
  }
  return (
    <ul className="grid xl:grid-cols-3 grid-cols-2 gap-x-3 gap-y-4  min-h-[430px] mt-10">
      {categories.slice(0, 6).map((cat) => (
        <CategoryLi disabled={disabled} key={cat.id} cat={cat} type={type} />
      ))}
    </ul>
  );
}

export default CategoryList;
