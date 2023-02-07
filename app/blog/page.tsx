import getPostMetadata from '../../components/getPostMetadata';
import PostPreview from '../../components/PostPreview';

const BlogPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 gap-4 bg-black md:grid-cols-2">
        {postPreviews}
      </div>
    </div>
  );
};

export default BlogPage;
