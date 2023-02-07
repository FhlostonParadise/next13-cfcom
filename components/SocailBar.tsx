import { SiLinkedin, SiGithub, SiSpotify, SiInstagram } from 'react-icons/si';
import Link from 'next/link';
export default function SocialBar() {
  return (
    <div className="mx-auto mb-6 flex flex-row justify-center text-xl text-gray-300">
      <div className="pl-1">
        <Link
          href="https://www.linkedin.com/in/carsonfranklin"
          className="text-gray-200"
        >
          <SiLinkedin />
        </Link>
      </div>
      <div className="pl-6">
        <Link
          href="https://github.com/FhlostonParadise"
          className="text-gray-200 "
        >
          <SiGithub />
        </Link>
      </div>
      <div className="pl-6">
        <Link href="https://instagram.com/gencarson" className="text-gray-200 ">
          <SiInstagram />
        </Link>
      </div>
      <div className="pl-6">
        <Link
          href="https://open.spotify.com/artist/3MJYQp2TzYN0fhJE05SfDk?si=yonbqcdsSZa6JV-wj_qTvw"
          className="text-gray-200 "
        >
          <SiSpotify />
        </Link>
      </div>
    </div>
  );
}
