import Link from 'next/link';

import CoverImage from './CoverImage';

type Props = {
  title: string;
  cover_image: string;
  date: string;
  slug: string;
  subtitle: string;
};
const PostPreview = ({ title, cover_image, date, slug, subtitle }: Props) => {
  return (
    <div
      className="max-w-lg rounded-md border border-slate-700 bg-slate-800
    p-4 shadow-sm"
    >
      <CoverImage slug={slug} title={title} src={cover_image} />
      <span className=" w-auto rounded-xl bg-slate-700 px-4 text-xs text-slate-400">
        {date}
      </span>

      <Link href={`/blog/posts/${slug}`}>
        <h2 className=" mt-2 mb-4 text-lg font-semibold text-slate-300 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm text-slate-400">{subtitle}</p>
    </div>
  );
};

export default PostPreview;
