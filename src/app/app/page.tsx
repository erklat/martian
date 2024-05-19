import restClient from "@/api/restClient";

const Page = async () => {
  const response = await restClient.get("/posts");
  const { data: posts } = response;

  console.log(posts);

  return (
    <>
      {posts?.map((post) => post.title)}
      <br />
    </>
  );
};

export default Page;
