import { Router } from 'express';

import { urlRouter } from './url.route';

const routes = Router();

routes.use('/url', urlRouter);

export default routes;
