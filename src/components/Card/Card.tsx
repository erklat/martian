import Link from "next/link";

import withLogger from "@/components/WithNameLogging/WithNameLogging";
import Svg from "@/components/Svg/Svg";
import Carousel from "@/components/Carousel/Carousel";
import TPost from "@/types/post";

const Card = ({ post }: { post: TPost }) => {
  return (
    <article
      className={`
            border 
            border-gray-300 
            rounded-lg 
            overflow-hidden
        `}
    >
      <div
        className={`
            w-full
            h-52	
            bg-red
            flex
            justify-center
            items-center
        `}
      >
        <Svg
          icon="article"
          classNames={`
                fill-white
                w-10
                h-10
            `}
        />
      </div>
      <div
        className={`
            p-6
        `}
      >
        <span className="text-xs flex gap-2 items-center">
          <Svg icon="user" classNames="w-4 h-4 fill-white" />
          {post.author.name}
        </span>
        <h3
          className={`
                mt-1 
                mb-4
                font-semibold 
                overflow-hidden 
                overflow-ellipsis 
                line-clamp-1
            `}
        >
          {post.title}
        </h3>
        <div>
          <Carousel>
            {post.comments.map((comment) => (
              <div key={comment.id}>
                <span className="block">{comment.email}</span>
                <p className="text-xs">{comment.body}</p>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="flex justify-end mt-2">
          <Link href={`/post/${post.id}`}>Read more</Link>
        </div>
      </div>
    </article>
  );
};

export default withLogger(Card);
