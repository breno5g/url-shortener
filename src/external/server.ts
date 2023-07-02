/* eslint-disable no-console */
import 'reflect-metadata';
import 'src/external/envConfig';

import { app } from './app';

const port = process.env.PORT ?? 3001;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
