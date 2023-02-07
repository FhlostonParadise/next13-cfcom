import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from 'components/getPostMetadata';

const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className="bg-black">
      <div className="my-12 text-center">
        <h1 className="text-semibold text-2xl tracking-widest text-slate-100 ">
          {post.data.title}
        </h1>
        <p className="mt-2 text-slate-400">{post.data.date}</p>
      </div>

      <article className="prose text-slate-100 prose-h2:text-slate-400 prose-a:text-blue-400 prose-strong:font-bold prose-strong:text-indigo-500 ">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
