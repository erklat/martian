import TUser from "@/types/user";
import TComment from "@/types/comment";

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: TUser;
  comments: TComment[];
};

export default TPost;
