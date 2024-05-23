import restClient from "@/api/restClient";
import TPost from "@/types/post";
import TUser from "@/types/user";
import uniq from "lodash/uniq";

export const getUser = async (userId: number) => {
  const res = await restClient.get(`/users/${userId}`);
  return res;
};

export const getUsers = async (userIds = []) => {
  try {
    const response = await Promise.all(
      userIds.map(async (id) => {
        const user = await getUser(id);
        return user.data;
      })
    );

    return response;
  } catch (error) {}
};

export const getComments = async (postId: number) => {
  try {
    const response = await restClient.get(`/comments?postId=${postId}`);
    return response.data;
  } catch (error) {}
};

export const getPostsListing = async () => {
  try {
    const postsResponse = await restClient.get(`/posts`);
    const userIds: never[] = uniq(
      postsResponse.data.map((post: TPost) => post.userId)
    );
    const users = await getUsers(userIds);

    const posts = await Promise.all(
      postsResponse.data.map(async (post: TPost) => {
        const comments = await getComments(post.id);
        const author = users?.find((user) => user.id === post.userId);

        return {
          ...post,
          author,
          comments,
        };
      })
    );

    return { posts, users };
  } catch (error) {
    // Handle error appropriately
    console.error("Error fetching posts:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

export const getSinglePost = async (postId: number) => {
  try {
    const postsResponse = await restClient.get(`/posts/${postId}`);
    const { data } = postsResponse;
    const { userId }: { userId: never } = { ...data };
    const users = await getUsers([userId]);
    const comments = await getComments(postId);

    return {
      ...postsResponse.data,
      author: users?.[0] ?? null,
      comments,
    };
  } catch (error) {
    console.error(error);
  }
};
