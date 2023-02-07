import Image from 'next/image';
import Mbay from '../public/mbay-round.png';
import SocialBar from '#/components/SocailBar';

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="mx-auto flex flex-col justify-center ">
        <Image
          className="mx-auto flex rounded-full border-2 border-slate-700 drop-shadow-xl"
          src={Mbay}
          width={250}
          height={250}
          alt="Me"
        />
        <div className="flex flex-col justify-center ">
          <h1 className="mb-4 flex justify-center pt-4 text-4xl font-semibold tracking-widest">
            CARSON H. FRANKLIN
          </h1>

          <div className=" mx-auto mb-6 text-center text-lg tracking-wider text-gray-300">
            <h1>
              {' '}
              Transformative{' '}
              <strong className="underline decoration-indigo-500">
                IT Manager{' '}
              </strong>
              and{' '}
              <strong className="underline decoration-pink-600">
                Managed Services Executive
              </strong>
            </h1>
            <h1>with over 20 years of experience in IT Service Delivery</h1>
            <h1>Project Management, and vCIO roles.</h1>
          </div>
          <div className="mx-auto flex flex-row justify-center">
            <SocialBar />
          </div>
        </div>
      </div>
    </div>
  );
}
