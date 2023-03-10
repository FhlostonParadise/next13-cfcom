'use client';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

export function AddressBar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-x-2 p-3.5 lg:px-5 lg:py-3">
      <div className="text-gray-600"></div>
      <div className="flex gap-x-1 text-sm font-medium">
        <div>
          <Link href="/">
            <span className="text-gray-400">carsonfranklin.com</span>
          </Link>
        </div>
        <span className="px-2 text-gray-400">{pathname}</span>

        {/*     {pathname ? (
          <>
            <span className="text-gray-600">/</span>
            {pathname
              .split('/')
              .slice(2)
              .map((segment) => {
                return (
                  <React.Fragment key={segment}>
                    <span>
                      <span
                        key={segment}
                        className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-gray-100"
                      >
                        {segment}
                      </span>
                    </span>

                    <span className="text-gray-600">/</span>
                  </React.Fragment>
                );
              })}
          </>
        ) : null} */}
      </div>
    </div>
  );
}
