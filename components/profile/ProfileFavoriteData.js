/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import ProfileFavoriteEmpty from './ProfileFavoriteEmpty';
import CategoryPercentage from './CategoryPercentage';
import JustHeart from '../common/JustHeart';

export default function ProfileFavoriteData({ jobs, categoryType, professions, studies }) {
  let data = [];
  const { t } = useTranslation('common');

  switch (true) {
    case 'jobs' === categoryType.id:
      data = jobs;
      break;
    case 'studies' === categoryType.id:
      data = studies;
      break;
    case 'professions' === categoryType.id:
      data = professions;
      break;
    default:
      break;
  }
  if (!Array.isArray(data) || !data.length) {
    return <ProfileFavoriteEmpty categoryType={categoryType} />;
  }
  return (
    <div className="scroller-fav">
      <ul className="jobs-list flex flex-col gap-y-4 mt-4">
        {data.map((dataItem) => (
          <li
            key={dataItem.id}
            className="border-b-[1px] mt-[20px] border-[rgba(151,151,151,0.13)] py-2"
          >
            <div className="flex justify-between">
              <div className="flex">
                <div className="flex">
                  <CategoryPercentage percentage={dataItem?.percentage} />
                  <div className="profile-fav-company leading-6 mr-[15px]">
                    <h3 className="font-bold text-[#333300] text-[20px]">{dataItem.group}</h3>
                    <h4 className="description font-bold text-[18px] text-[#333300]">
                      {dataItem.title}
                    </h4>
                  </div>
                </div>
              </div>
              <p
                className="description leading-5 w-[450px] mr-10 text-[#333300] opacity-70 text-[18px]"
                dangerouslySetInnerHTML={{ __html: dataItem.description }}
              />
              <div className="mr-[100px] flex items-center">
                <JustHeart id={dataItem.id} type={categoryType.id} />
                {'jobs' === categoryType.id && (
                  <button
                    className="ml-[35px] mr-[20px] focus:outline-none rounded-full border-black border"
                    type="button"
                  >
                    {/* <Eye /> */}
                  </button>
                )}
                <Link href={`${categoryType.id}/${dataItem.id}`}>
                  <a className="border-black border-2 text-black rounded-[10px]  px-[20px] active:bg-gray-lighter focus:outline-none h-10 leading-10 ml-2 mr-2">
                    {'jobs' === categoryType.id ? t('הגש מועמדות') : t('לחץ לצפייה')}
                  </a>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
