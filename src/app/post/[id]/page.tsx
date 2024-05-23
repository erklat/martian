import { getSinglePost } from "@/utils/api";

import PostPage from "@/pages/PostPage/PostPage";

const Page = async ({ params }: { params: { id: number } }) => {
  const { id: postId } = { ...params };
  const post = await getSinglePost(postId);

  return <PostPage post={post} />;
};

export default Page;
