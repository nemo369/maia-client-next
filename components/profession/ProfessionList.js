import { Fragment, useCallback, useRef } from 'react';
import { useVirtual } from 'react-virtual';

import CategoryWithHeart from '../common/CategoryWithHeart';

function ProfessionList({ professions }) {
  const parentRef = useRef();

  const rowVirtualizer = useVirtual({
    size: professions.length,
    parentRef,
    estimateSize: useCallback(() => 35, []),
    overscan: 5,
  });

  const columnVirtualizer = useVirtual({
    horizontal: true,
    size: professions.length,
    parentRef,
    estimateSize: useCallback(() => 100, []),
    overscan: 5,
  });
  return (
    <>
      <div
        ref={parentRef}
        className="List"
        style={{
          height: '150px',

          width: '300px',

          overflow: 'auto',
        }}
      >
        <ul
          className="grid grid-cols-3 gap-2 pb-6 ListInner"
          style={{
            height: `${rowVirtualizer.totalSize}px`,
            width: `${columnVirtualizer.totalSize}px`,
            position: 'relative',
          }}
        >
          {rowVirtualizer.virtualItems.map((virtualRow) => (
            <Fragment key={virtualRow.index}>
              {columnVirtualizer.virtualItems.map((virtualColumn) => (
                <div
                  key={virtualColumn.index}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: `${virtualColumn.size}px`,
                    height: `${virtualRow.size}px`,
                    transform: `translateX(${virtualColumn.start}px) translateY(${virtualRow.start}px)`,
                  }}
                >
                  <li className="h-full">
                    <CategoryWithHeart
                      value={professions[virtualRow.index * 3 + virtualColumn.index].title}
                      isButton
                      description={
                        professions[virtualRow.index * 3 + virtualColumn.index].description
                      }
                      id={professions[virtualRow.index * 3 + virtualColumn.index].id}
                      type="professions"
                      className="h-full"
                    />
                  </li>
                </div>
              ))}
            </Fragment>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProfessionList;
