import express from 'express';
import path from 'path';
import React from 'react';
import logger from 'morgan';
import { renderToString } from 'react-dom/server';
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router';
import routes from './client/javascript/router-server-src/components/routes';



var app = express();

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public'), {index: false}));
app.use(logger('dev'));






// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {


  //match在渲染前根据location用来匹配react-router的routes路由
  //使用 RoutingContext 同步渲染 route 组件
  //注意！这里的 req.url 应该是从初始请求中获得的
  //完整的 URL 路径，包括查询字符串
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // hey we made it!
      // hey we made it!
      // `RouterContext` is the what `Router` renders. `Router` keeps these
      // `props` in its state as it listens to `browserHistory`. But on the
      // server our app is stateless, so we need to use `match` to
      // get these props before rendering.
      // if we got props then we matched a route and can render
      const appHtml = renderToString(<RouterContext {...props}/>);
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
});

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel="stylesheet" href="/lib/bootstrap/bootstrap.min.css" type="text/css" media="all">
    <div class=container>
        <div id=app>${appHtml}</div>
    </div>
    <script src="/js/router_server_index.js"></script>
   `
}



//至于加载数据，你可以用 renderProps 去构建任何你想要的形式——
//例如在 route 组件中添加一个静态的 load 方法，
//或如在 route 中添加数据加载的方法——由你决定


var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});
