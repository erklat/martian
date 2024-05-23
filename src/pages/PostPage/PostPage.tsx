"use client";

import PageTitle from "@/components/PageTitle/PageTitle";
import withLogger from "@/components/WithNameLogging/WithNameLogging";
import Carousel from "@/components/Carousel/Carousel";
import Svg from "@/components/Svg/Svg";
import TPost from "@/types/post";

const PostPage = ({ post }: { post: TPost }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="max-w-4xl	mx-auto flex flex-col gap-10">
          <PageTitle title={post?.title} />
          <span className="text-xs flex gap-2 items-center">
            <Svg icon="user" classNames="w-4 h-4 fill-white" />
            {post?.author?.name}
          </span>
          <p>{post?.body}</p>

          {!!post?.comments?.length && (
            <Carousel>
              {post.comments.map((comment) => (
                <div key={comment.id}>
                  <span className="block">{comment.email}</span>
                  <p className="text-xs">{comment.body}</p>
                </div>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </>
  );
};

export default withLogger(PostPage);
