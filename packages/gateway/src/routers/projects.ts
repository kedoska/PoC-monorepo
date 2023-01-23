import express = require('express');
import {
  Project,
  getProjects,
  ProjectSearchOptions,
} from '@nexplore/mina-core';

const router = express.Router();

router.get(
  '/',
  async (
    req: express.Request<object, object, object, ProjectSearchOptions>,
    res: express.Response<Project[]>
  ) => {
    res.send(await getProjects(req.query));
  }
);

export default router;
