import AppPage from "@/pages/AppPage/AppPage";
import { getPostsListing } from "@/utils/api";

const Page = async () => {
  const data = await getPostsListing();
  const { posts = [], users = [] } = { ...data };

  return <AppPage data={{ posts, users }} />;
};

export default Page;
