import TPost from "@/types/post";
import TSelectOption from "@/types/select";

export const ActionTypes = {
  SET_LOADING: "SET_LOADING",
  SET_POSTS: "SET_POSTS",
  STORE_FILTERS_BY_USER: "STORE_FILTERS_BY_USER",
} as const;

type TState = {
  appLoading: boolean;
  posts: TPost[];
  userFiltersActive: TSelectOption[];
};

interface ISetLoadingAction {
  type: typeof ActionTypes.SET_LOADING;
  payload: boolean;
}

interface ISetPostsAction {
  type: typeof ActionTypes.SET_POSTS;
  payload: TPost[];
}

interface IStoreFiltersByUserAction {
  type: typeof ActionTypes.STORE_FILTERS_BY_USER;
  payload: TSelectOption[];
}

type TAction = ISetLoadingAction | ISetPostsAction | IStoreFiltersByUserAction;

export const PostsReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        appLoading: action.payload,
      };

    case ActionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case ActionTypes.STORE_FILTERS_BY_USER:
      return {
        ...state,
        userFiltersActive: action.payload,
      };

    default:
      return state;
  }
};
