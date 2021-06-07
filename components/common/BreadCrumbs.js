import Link from 'next/link';
import React from 'react';
import ChevronLeft from '../svg/ChevronLeft';

function BreadCrumbs({ breadCrumbs }) {
  const main = [{ title: 'ראשי', href: '/' }];
  const bcs = [...main, ...breadCrumbs];
  return (
    <nav className="bread-crumbs">
      {/* <nav className="bread-crumbs" aria-label="breadcrumbs"> */}
      <ul className="flex items-center text-lg font-bold text-grey mb-4">
        {bcs.map((bc, key, { length, lastIndex = length - 1 }) => (
          <li
            className={`ml-3 flex items-center ${key === lastIndex ? 'text-black' : ''}`}
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
