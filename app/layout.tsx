import '#/styles/globals.css';
import { AddressBar } from '#/ui/AddressBar';
import { GlobalNav } from '#/ui/GlobalNav';
import { VercelLogo } from '#/ui/VercelLogo';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      {/* <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]"> */}
      <body className="overflow-y-scroll bg-slate-900">
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="mx-auto max-w-6xl space-y-6 px-2 pt-20 lg:py-8 lg:px-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <AddressBar />
              </div>
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg h-auto bg-black p-3.5 lg:p-6">{children}</div>
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <Byline />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

function Byline() {
  return (
    <div className="flex items-center justify-between gap-x-4 p-3.5 lg:px-5 lg:py-3">
      <div className="flex items-center gap-x-1.5">
             <div className="mx-auto w-full text-xs font-bold text-gray-400">
               <div className='flex items-center'> <AiOutlineCopyrightCircle className="flex-item justify-center" /><p>CHF</p></div>
      </div>
      </div>
    </div>
  );
}
