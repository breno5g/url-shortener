import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

import { UrlRepository } from '@repositories/url.repositorie';

import { UrlService } from '@services/url.service';

import { UrlController } from '@controllers/url.controller';

const db = new PrismaClient();

const urlRepository = new UrlRepository(db);

const urlService = new UrlService(urlRepository);

const urlController = new UrlController(urlService);

const urlRouter = Router();

urlRouter.post('/', urlController.createUrl);

urlRouter.get('/:id', urlController.findOneById);

export { urlRouter };
