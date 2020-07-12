import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";


TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const NewsItem = ({ newsItem, storyStatus, onStoryStatusChange }) => {
  const {
    num_comments,
    points,
    title,
    url,
    author,
    created_at,
    objectID
  } = newsItem;
  const formattedUrl = url ? url.split("/")[2].replace("www.", "") : "";
  const onUpVote = () => {
    if (storyStatus[objectID]) {
      storyStatus[objectID].isUpvoted = true;
      let count = storyStatus[objectID].points || points;
      storyStatus[objectID].points = +count + 1;
    } else {
      storyStatus[objectID] = { isUpvoted: true, points: points + 1 };
    }
    onStoryStatusChange(storyStatus);
  };
  const getUpvoteColor = () => {
    if (
      storyStatus &&
      storyStatus[+objectID] &&
      storyStatus[+objectID].isUpvoted
    ) {
      return "red";
    } else {
      return "grey";
    }
  };
  const getPoints = () => {
    if (storyStatus[objectID] && storyStatus[objectID].isUpvoted === true) {
      return storyStatus[objectID].points;
    }
    return points;
  };
  const getPointColor = () => {
    let pointCount = points;

    if (storyStatus[objectID] && storyStatus[objectID].isUpvoted === true) {
      pointCount = storyStatus[objectID].points;
    }
    if (pointCount >= 50 && pointCount <= 99) return "#fa5202";
    else if (pointCount >= 100) return "#db8418";
    return "#000";
  };
  const onHide = () => {
    if (storyStatus[objectID]) {
      storyStatus[objectID].isHidden = true;
    } else {
      storyStatus[objectID] = { isHidden: true };
    }
    onStoryStatusChange(storyStatus);
  };

  return (
    <section className="section-wrap news-item">
      <aside className="info-group ">
        <div className="info content">
          <span>{num_comments}</span>
        </div>
        <div className="info content">
          <span style={{ color: getPointColor() }}>{getPoints()}</span>
        </div>
        <div className="info content">
          <span className="vote-controll" onClick={onUpVote}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 512 512"
            >
              <title></title>
              <g id="icomoon-ignore"></g>
              <path
                fill={getUpvoteColor()}
                d="M448 416l-192-320-192 320z"
              ></path>
            </svg>
          </span>
        </div>
      </aside>
      <div className="info  spread">
        <section className="news">
          <h2 className="title">
            <a target="blank" href={url}>
              {title}
            </a>
          </h2>

          <aside>
            <div className="source">({formattedUrl})</div>
            <div className="author">{author}</div>
            <div className="time">{timeAgo.format(new Date(created_at))}</div>
            <div className="hide" onClick={onHide}>
              [<span> hide </span>]
            </div>
          </aside>
        </section>
      </div>
    </section>
  );
};

export default NewsItem;
