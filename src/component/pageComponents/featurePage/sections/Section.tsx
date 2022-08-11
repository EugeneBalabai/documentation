import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React, { FC } from 'react';

import { SectionData } from './Sections';

export const Section: FC<{ isActive: boolean; section: SectionData }> = ({
  isActive,
  section,
}) => {
  return (
    <Link
      className={clsx(
        `text-home-text hover:no-underline group flex flex-col items-center p-2 sm:p-4 md:p-8`,
        isActive && 'text-primary'
      )}
      key={section.slug}
      to={`/features/${section.slug}`}
    >
      <div className="flex items-center mt-auto basis-[94px] w-[110px]">
        {section.image}
      </div>
      <span
        className={clsx(
          'border-0',
          'border-b',
          'border-solid',
          !isActive && 'border-transparent'
        )}
      >
        {section.name}
      </span>
    </Link>
  );
};