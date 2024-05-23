import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";
import withLogger from "@/components/WithNameLogging/WithNameLogging";
import { PostsReducer, ActionTypes } from "@/state-management/PostsReducer";
import TPost from "@/types/post";
import TSelectOption from "@/types/select";

// Define the initial state
const initialState = {
  appLoading: false,
  posts: [] as TPost[],
  userFiltersActive: [] as TSelectOption[],
};

// Define the context interface
export interface IPostsContext {
  posts: TPost[];
  userFiltersActive: TSelectOption[];
  storePosts: (posts: TPost[]) => void;
  storeFiltersByUser: (userFiltersActive: TSelectOption[]) => void;
  appLoading: boolean;
}

// Create the context with initial state
export const PostsContext = createContext<IPostsContext>({
  ...initialState,
  storePosts: () => {},
  storeFiltersByUser: () => {},
  appLoading: false,
  userFiltersActive: [],
});

// Define the provider component
const PostsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(PostsReducer, initialState);

  // Define the actions
  const storePosts = useCallback((posts: TPost[]) => {
    dispatch({ type: ActionTypes.SET_POSTS, payload: posts });
  }, []);

  const storeFiltersByUser = useCallback(
    (userFiltersActive: TSelectOption[]) => {
      dispatch({
        type: ActionTypes.STORE_FILTERS_BY_USER,
        payload: userFiltersActive,
      });
    },
    []
  );

  // Filter posts based on active user filters
  const filteredPosts = state.userFiltersActive.length
    ? state.posts.filter((post) =>
        state.userFiltersActive.some(
          (filter: TSelectOption) => filter.value === post.author.id
        )
      )
    : state.posts;

  // Construct the context value
  const value: IPostsContext = {
    ...state,
    posts: filteredPosts,
    storePosts,
    storeFiltersByUser,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

// Custom hook to use the PostsContext
export const usePostsContext = () => useContext(PostsContext);

export default withLogger(PostsProvider);
