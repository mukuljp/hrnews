import express from "express";
import path from "path";
import fetch from "node-fetch";
import template from "./src/template";
import ssr from "./src/server";

const app = express();

// Serving static files
app.use("/assets", express.static(path.resolve(__dirname, "assets")));
app.use("/media", express.static(path.resolve(__dirname, "media")));

// hide powered by express
app.disable("x-powered-by");
// start the server
app.listen(process.env.PORT || 3000);

let initialState = {
  isFetching: false,
  apps: [],
  storyStatus: {}
};
app.get("/", (req, res) => {
  res.redirect('/0');
})
app.get("/:pageno", (req, res) => {
  const pageno = req.params.pageno || 1;
  if(isNaN(pageno))res.send('');
  fetch(
    `https://hn.algolia.com/api/v1/search_by_date?tags=story&&page=${pageno}`
  )
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    })
    .then(json => {
      let initialState = {
        isFetching: json ? false : true,
        news: json || { hits: [] },
        page: pageno
      };
      const { preloadedState, content } = ssr(initialState);
      const response = template(
        "Hacker News",
        preloadedState,
        content
      );
      res.setHeader("Cache-Control", "assets, max-age=604800");
      res.send(response);
    });
});

app.get("/client", (req, res) => {
  let response = template("Client Side Rendered page");
  res.setHeader("Cache-Control", "assets, max-age=604800");
  res.send(response);
});
