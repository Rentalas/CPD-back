import { Express } from 'express';
import vhost from 'vhost';
import { landingPage } from './landing-page';
import { spa } from './spa';

export const configureRoutes = (app: Express) => {
    app.use(vhost('*', landingPage));
    app.use(vhost('app.*', spa));
}