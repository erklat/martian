import TPost from "@/types/post";
import TSelectOption from "@/types/select";

export const ActionTypes = {
  SET_IS_LOGGED_IN: "SET_IS_LOGGED_IN",
} as const;

type TState = {
  isUserLoggedIn: boolean;
};

interface ISetIsUserLoggedIn {
  type: typeof ActionTypes.SET_IS_LOGGED_IN;
  payload: boolean;
}

type TAction = ISetIsUserLoggedIn;

export const AuthReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case ActionTypes.SET_IS_LOGGED_IN:
      return {
        ...state,
        isUserLoggedIn: action.payload,
      };

    default:
      return state;
  }
};
