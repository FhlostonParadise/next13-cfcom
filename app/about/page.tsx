import { ExternalLink } from '#/ui/ExternalLink';
import Image from 'next/image';
import Mbay from '../../public/mbay-round.png';
export default function Page() {
  return (
    <div className="space-6 mt-4 p-4">
      <h1 className="pl-6 text-4xl font-medium tracking-widest text-gray-200">
        ABOUT ME
      </h1>
      <section className="py-8">
        <div className="container  mx-auto px-4">
          <div className="-mx-4 mb-12 flex flex-wrap items-center lg:mb-16">
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-lg">
                <div className="rounded-xl bg-gray-900 p-4">
                  <span className="text-xs font-bold uppercase text-slate-400">
                    GenX / Millenial Daywalker
                  </span>
                  <h2 className="font-heading mt-2 mb-4 text-4xl font-semibold lg:text-3xl ">
                    A Bit About Me
                  </h2>
                  <div className="max-w-sm">
                    <div className="mb-4 text-sm leading-relaxed">
                      <p>
                        My career has thus far, been about using technology to
                        help clients gain a competitive advantage, protect their
                        organization from external and internal threats, and
                        provide guidance on which solutions are best suited for
                        them.{' '}
                      </p>
                    </div>
                    <div className="mb-4 text-sm leading-relaxed">
                      <p>
                        Working for, and running a Managed Service Provider has
                        given me the unique opportunity to work with clients
                        across numerous industries. These include state and
                        local government, law enforcement, non-profits,
                        high-tech, agriculture, legal, and education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <Image
                className="mx-auto flex rounded-full border-2 border-slate-600 drop-shadow-xl"
                src={Mbay}
                width={250}
                height={250}
                alt="Me"
              />
            </div>
          </div>
          <div className="-mx-4 -mb-12 flex flex-wrap">
            <div className="mb-12 flex w-full items-start px-4 md:w-1/2 lg:w-1/3">
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 font-semibold text-gray-50">
                1
              </span>
              <div className="max-w-xs px-4">
                <p className="text-sm leading-loose text-gray-400">
                  I have helped a number of clients execute a shift from CapEx
                  to OpEx models utilizing shifts to cloud providers.
                </p>
              </div>
            </div>
            <div className="mb-12 flex w-full items-start px-4 md:w-1/2 lg:w-1/3">
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 font-semibold text-gray-50">
                2
              </span>
              <div className="max-w-xs px-4">
                <p className="text-sm leading-loose text-gray-400">
                  Ive Filled CTO / CIO roles for clients during transitionary
                  periods in both public and private sectors.
                </p>
              </div>
            </div>
            <div className="mb-12 flex w-full items-start px-4 md:w-1/2 lg:w-1/3">
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 font-semibold text-gray-50">
                3
              </span>
              <div className="max-w-xs px-4">
                <p className="text-sm leading-loose text-gray-400">
                  I have assisted and run large scale deployments across the
                  country for multiple Fortune 100 companies.
                </p>
              </div>
            </div>
            <div className="mb-12 flex w-full items-start px-4 md:w-1/2 lg:w-1/3">
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 font-semibold text-gray-50">
                4
              </span>
              <div className="max-w-xs px-4">
                <p className="text-sm leading-loose text-gray-400">
                  I spend an equal amount of personal and professional time
                  exploring new technologies. These can range from Additive
                  Manufacturing (3D Printing), to Unmanned Aerial Vehicles, to
                  the latest full-stack technologies (This site is a direct
                  result of that).
                </p>
              </div>
            </div>
            <div className="mb-12 flex w-full items-start px-4 md:w-1/2 lg:w-1/3">
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 font-semibold text-gray-50">
                5
              </span>
              <div className="max-w-xs px-4">
                <p className="text-sm leading-loose text-gray-400">
                  I believe technology must solve a practical problem for it to
                  be considered business critical or ready for adoption. There
                  is a chasm between bleeding, and cutting edge technologies.
                </p>
              </div>
            </div>
            <div className="mb-12 flex w-full items-start px-4 md:w-1/2 lg:w-1/3">
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 font-bold text-gray-50">
                6
              </span>
              <div className="max-w-xs px-4">
                <p className="text-sm leading-loose text-gray-400">
                  My first personal website was hosted on Geocities and built
                  from nothing but HTML. This one runs on Next.JS 13. Its been
                  an interesting progression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
