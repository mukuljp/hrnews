import React from "react";

const Header = ({}) => {
  return (
    <header>
        <section className="logo">
        <a onClick={()=>{global.reactHistory.push(`/0`)}}><img src="https://news.ycombinator.com/y18.gif" width="18" height="18" style={{'border':'1px white solid'}}/></a>
        <div onClick={()=>{global.reactHistory.push(`/0`)}}>HackerNews</div>
        </section>
      <section className="section-wrap headings">
        <aside className="info-group">
          <h3 className="info">
            <span>Comments</span>
          </h3>
          <h3 className="info">
            <span>Vote Count</span>
          </h3>
          <h3 className="info">
            <span>Up Vote</span>
          </h3>
        </aside>
        <h3 className="info spread">
          <span>News Details</span>
        </h3>
      </section>
    </header>
  );
};

export default Header;


