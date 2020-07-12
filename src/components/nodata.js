import React from "react";

const Nodata = ({}) => {
  return (
    <div className="notfound-wrap">
      <div className="notfound">
        <div className="notfound-404"></div>
        <h1>404</h1>
        <h2>Oops! Page Not Be Found</h2>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed. name changed or is temporarily unavailable
        </p>
        <a style={{cursor:'pointer'}} onClick={() => global.reactHistory.push(`/0`)    }>Back to homepage</a>
      </div>
    </div>
  );
};

export default Nodata;
