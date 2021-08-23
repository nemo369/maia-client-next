import { Fragment, useCallback, useRef } from 'react';
import { useVirtual } from 'react-virtual';

import CategoryWithHeart from '../common/CategoryWithHeart';

function ProfessionList({ professions }) {
  const parentRef = useRef();

  const rowVirtualizer = useVirtual({
    size: professions.length / 3,
    parentRef,
    estimateSize: useCallback(() => 180, []),
    overscan: 5,
  });

  const columnVirtualizer = useVirtual({
    horizontal: false,
    size: 3,
    parentRef,
    estimateSize: useCallback(() => 530, []),
  });
  return (
    <>
      <div
        ref={parentRef}
        className="List"
        style={{
          height: 'calc(100vh - 368px)',
          width: '100%',
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
                <li className="h-full" key={virtualColumn.index}>
                  <CategoryWithHeart
                    value={professions[virtualColumn.index * 3 + virtualRow.index]?.title}
                    isButton
                    description={
                      professions[virtualColumn.index * 3 + virtualRow.index]?.description
                    }
                    id={professions[virtualColumn.index * 3 + virtualRow.index]?.id}
                    type="professions"
                    className="h-full"
                  />
                </li>
              ))}
            </Fragment>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProfessionList;
