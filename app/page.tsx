import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Mbay from '../public/mbay-round.png';
export default function Page() {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="mx-auto flex flex-col justify-center  ">
        <Image
          className="mx-auto flex rounded-full border-2 border-slate-700 drop-shadow-xl"
          src={Mbay}
          width={250}
          height={250}
          alt="Me"
        />
        <div className="flex flex-col justify-center ">
          <h1 className="flex justify-center pt-4 text-3xl font-semibold tracking-widest mb-4">
            CARSON H. FRANKLIN
          </h1>
          <div className="flex bg-slate-900 rounded-lg justify-center py-4 mx-56  font-bold  text-center text-xs text-slate-400">
            Transformative IT Manager and Managed Services Executive with over
            20 years of experience in IT Service Delivery, Project Management,
            and vCIO roles.
          </div>
         
          
        </div>
      </div>
    </div>
  );
}
