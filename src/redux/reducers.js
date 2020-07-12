import { REQUEST_APPS, RECEIVE_APPS } from "./actions";

function apps(state = { isFetching: false, apps: [] }, action) {
  switch (action.type) {
    case REQUEST_APPS:
      return Object.assign({}, state, {
        isFetching: true,
        page: action.page
      });
    case RECEIVE_APPS:
      return Object.assign({}, state, {
        isFetching: false,
        news: action.news
      });
    default:
      return state;
  }
}

export default apps;
