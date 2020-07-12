import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { fetchAppsIfNeeded } from "../redux/actions";
import Header from "./header";
import NewsList from "./newsList";
import Pagination from "./pagination";
import ChartsComponent from "./chartsComponent";
import Loader from "./loader";
import Nodata from "./nodata";
//const ChartsComponent = React.lazy(() => import('./chartsComponent'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyStatus: {},
      page: props.news.page
    };
  }
  getStoryStatusFromLocal() {
    let storyStatus = {};
    try {
      storyStatus = JSON.parse(localStorage.getItem("storyStatus") || "{}");
    } catch (e) {
      storyStatus = {};
    }
    return storyStatus;
  }
  componentDidUpdate() {
    this.props.dispatch(fetchAppsIfNeeded(this.props.match.params.pageno));
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAppsIfNeeded(this.state.page));
    this.onStoryStatusChange(this.props.storyStatus);
  }
  onStoryStatusChange(storyStatus) {
    this.setState({ storyStatus: storyStatus });
    localStorage.setItem("storyStatus", JSON.stringify(storyStatus));
  }

  render() {
    const { isFetching, news } = this.props;
    const totalnews = news.hits.length;

    if (!isFetching && totalnews === 0) {
      return <Nodata />;
    }

    return (
      <>
        <Header />
        <NewsList
          newsList={news.hits}
          totalnews={totalnews}
          storyStatus={this.state.storyStatus}
          onStoryStatusChange={this.onStoryStatusChange.bind(this)}
        />
        <Pagination
          page={this.props.page}
          totalPages={this.props.news.nbPages}
        />

        {/* <Suspense fallback={<div>Loading...</div>}>
        <ChartsComponent />
      </Suspense> */}
        <hr />
        <ChartsComponent options={this.prepareChartData()} />
        <hr />
        {isFetching && <Loader />}
      </>
    );
  }
  prepareChartData() {
    const news = this.props.news.hits || [];
    const storyStatus = this.state.storyStatus;
    const categories = [];
    const data = [];
    news.forEach(newsItem => {
      const { objectID, points } = newsItem;

      let pointCount = points;
      if (storyStatus[objectID] && +storyStatus[objectID].points >= 0) {
        pointCount = +storyStatus[objectID].points;
      }
      if (storyStatus[objectID] && storyStatus[objectID].isHidden) {
      } else {
        categories.push(objectID);
        data.push(pointCount);
      }
    });
    return { categories, data };
  }
}
function mapStateToProps({ isFetching, news, storyStatus, page }) {
  return {
    isFetching,
    news,
    storyStatus,
    page
  };
}
export default connect(mapStateToProps)(App);
