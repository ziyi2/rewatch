import express from 'express';
import path from 'path';
import React from 'react';
import logger from 'morgan';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './client/javascript/router-server-src/components/routes';



var app = express();

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public'), {index: false}));
app.use(logger('dev'));


// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // hey we made it!
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
    <link rel=stylesheet href=/index.css>
     <link rel="stylesheet" href="/lib/bootstrap/bootstrap.min.css" type="text/css" media="all">
    <div id=app>${appHtml}</div>
    <script src="/js/router_server_index.js"></script>
   `
}

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});
