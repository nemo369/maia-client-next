import Link from 'next/link';
import React from 'react';
import ChevronLeft from '../svg/ChevronLeft';

function BreadCrumbs({ breadCrumbs }) {
  const main = [{ title: 'ראשי', href: '/' }];
  const bcs = [...main, ...breadCrumbs];
  console.log(breadCrumbs);
  return (
    <nav className="bread-crumbs" aria-label="breadcrumbs">
      <ul className="flex items-center text-lg font-bold text-gray mb-4">
        {bcs.map((bc, key, { length, lastIndex = length - 1 }) => (
          <li
            className={`ml-3 flex items-center opacity-50 ${
              key === lastIndex ? 'text-black opacity-100' : ''
            }`}
            key={bc.href}
          >
            {key ? (
              <span className="ml-3">
                <ChevronLeft />
              </span>
            ) : (
              ''
            )}

            <Link href={bc.href}>
              <a>{bc.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BreadCrumbs;
