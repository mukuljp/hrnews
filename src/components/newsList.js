import React from "react";
import NewsItem from './newsItem'

const NewsList = ({ newsList, totalnews ,storyStatus,onStoryStatusChange}) => {
  const cards = newsList.map((news, index) => {
    if (storyStatus[news.objectID]&&storyStatus[news.objectID].isHidden)return null;
    return (
    <NewsItem key={news.objectID} newsItem={news} storyStatus={storyStatus} onStoryStatusChange={onStoryStatusChange}></NewsItem>
  )}).filter(item=>item!=null);

  return <article className="app-news">{cards}</article>;
};

export default NewsList;


