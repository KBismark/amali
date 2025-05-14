import { AngularNodeAppEngine, writeResponseToNodeResponse } from '@angular/ssr/node';
import express from 'express';

export const angularAppRouter = express.Router();

const angularApp = new AngularNodeAppEngine();

angularAppRouter.use((req, res, next)=>{
  console.log('Reached here: ', req.baseUrl, req.path, req.originalUrl);
  next();
});

/**
 * Handle all other requests by rendering the Angular application.
 */
angularAppRouter.use('*', (req, res, next) => {
  console.log('Reached here too: ',  req.baseUrl, req.path, req.originalUrl);

  angularApp
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});
