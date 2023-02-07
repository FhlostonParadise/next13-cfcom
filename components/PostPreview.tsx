import Link from 'next/link';
import getPostMetadata from '../components/getPostMetadata';
import CoverImage from '../components/Cover-Image';
import { PostMetadata } from '../components/PostMetadata';

type Props = {
  title: string;
  src: string;
  slug: string;
};

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="rounded-md border border-slate-700  bg-slate-900 p-4 shadow-sm">
      <div className="w-full p-4">
        <CoverImage
          slug={props.slug}
          title={props.title}
          src={props.cover_image}
        />
      </div>

      <Link href={`/blog/${props.slug}`}>
        <h2 className="text-xl font-semibold tracking-wider text-violet-600 hover:underline">
          {props.title}
        </h2>
        <div className="mb-4 text-sm text-slate-400">{props.date}</div>
      </Link>

      <p className="text-slate-700">{props.excerpt}</p>
    </div>
  );
};

export default PostPreview;
