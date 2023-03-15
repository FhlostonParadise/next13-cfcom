import '#/styles/globals.css';
import { AddressBar } from '#/ui/AddressBar';
import { GlobalNav } from '#/ui/GlobalNav';
import GAnalytics from '../components/GAnalytics';
import { AnalyticsWrapper } from '../components/analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body className="overflow-y-scroll bg-slate-900">
        {/* <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]"> */}
        {/* <body className="overflow-y-scroll linear-gradient(rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))"> */}
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="max-w-8xl mx-auto space-y-6 px-2 pt-20 lg:py-8 lg:px-8">
            <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <AddressBar />
              </div>
            </div>

            <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
              <div className="h-auto rounded-lg bg-black p-3.5 lg:p-6">
                {children}
                <AnalyticsWrapper />
                <GAnalytics />
              </div>
            </div>

            <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
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
    <div className="mx-auto flex flex-row justify-center gap-x-4 p-3.5 text-gray-500 lg:px-5 lg:py-3">
      © 2023 Carson H. Franklin
    </div>
  );
}
