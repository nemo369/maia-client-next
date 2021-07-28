/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Link from 'next/link';
import GrayHat from '../svg/GrayHat';

export default function ProfileFavoriteEmpty({ categoryType }) {
  return (
    <div className="w-[100%] h-[283px] flex justify-center items-center">
      <div>
        <div className="gray-hat">
          <GrayHat />
        </div>
        <div className="text-black opacity-20 text-[28px] font-bold">
          עדיין לא נבחרו מסלולי לימוד שאהבת
        </div>
        <Link href={`/${categoryType?.id}`}>
          <a className="text-[#3D9CA8] text-[20px] font-bold underline flex justify-center">
            לעמוד ה{categoryType?.name}
          </a>
        </Link>
      </div>
    </div>
  );
}
