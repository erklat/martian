"use client";
import { useEffect } from "react";
import withLogger from "@/components/WithNameLogging/WithNameLogging";
import PostsSearchInput from "@/components/PostsSearchInput/PostsSearchInput";
import {
  usePostsContext,
  IPostsContext,
} from "@/state-management/PostsProvider";
import LayoutContainer from "@/components/Layout/Layout";
import Card from "@/components/Card/Card";
import PageTitle from "@/components/PageTitle/PageTitle";
import TPost from "@/types/post";
import TUser from "@/types/user";
import TSelectOption from "@/types/select";
import Svg from "@/components/Svg/Svg";

interface IProps {
  data: {
    posts: TPost[];
    users: TUser[];
  };
}

const AppPage: React.FC<IProps> = ({ data }) => {
  const { posts: initialPosts, users } = { ...data };
  const {
    storePosts,
    storeFiltersByUser,
    posts,
    userFiltersActive,
  }: IPostsContext = usePostsContext();

  useEffect(() => {
    storePosts(initialPosts);
  }, [initialPosts, storePosts]);

  const onChange = (options: TSelectOption[] | null) => {
    storeFiltersByUser(options ?? []);
  };

  return (
    <>
      <PageTitle
        title="Posts Listing"
        actions={
          <PostsSearchInput
            options={users?.map((user) => ({
              label: user.name,
              value: user.id,
            }))}
            onChange={onChange}
            value={userFiltersActive}
          />
        }
      />
      {!!userFiltersActive?.length && (
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row pb-10 gap-4 md:gap-0">
            <div className="md:basis-96">Filtering by users:</div>
            <div className="flex grow gap-4 flex-wrap">
              {userFiltersActive.map((filter) => (
                <span
                  className="w-conte"
                  key={`filter_${filter.label}_${filter.value}`}
                >
                  <button
                    onClick={() =>
                      storeFiltersByUser(
                        userFiltersActive.filter(
                          (active) => active.value !== filter.value
                        )
                      )
                    }
                    className="flex pl-2 pr-6 py-1 text-black leading-none bg-white rounded-xl align-center relative"
                  >
                    {filter.label}
                    <Svg
                      icon="x"
                      classNames="w-3 h-3 absolute top-1/2 right-2 -translate-y-1/2"
                    />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <LayoutContainer>
        {posts?.map((post: TPost) => (
          <Card post={post} key={`article_${post.id}`} />
        ))}
      </LayoutContainer>
    </>
  );
};

export default withLogger(AppPage);
