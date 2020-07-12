export const REQUEST_APPS = "REQUEST_APPS";
export const RECEIVE_APPS = "RECEIVE_APPS";

function requestApps(page) {
  return {
    type: REQUEST_APPS,
    page: page
  };
}

function receiveApps(json) {
  return {
    type: RECEIVE_APPS,
    news: json
  };
}

function fetchApps(page) {
  return dispatch => {
    dispatch(requestApps(page));
    return fetch(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&&page=${page}`
    )
      .then(response => response.json())
      .then(json => dispatch(receiveApps(json)));
  };
}

function shouldFetchApps(state, page) {
  const news = state.news;
  const maxPages = (news && news.nbPages) || null;
  if(page==0&&news.nbPages==0&&!state.isFetching){
    return true;
  }
  if (page != state.page && maxPages != null && page < maxPages && page >= 0) {
    return true;
  }
  if (state.isFetching) {
    return false;
  }
}

export function fetchAppsIfNeeded(page) {
  return (dispatch, getState) => {
    if (shouldFetchApps(getState(), page)) {
      return dispatch(fetchApps(page));
    }
  };
}
