import express, { Request, NextFunction } from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.get('/', async (req: Request, _res, next: NextFunction) =>
	next(await UserController.findAll(req)),
);
router.get('/:id', async (req: Request, _res, next: NextFunction) =>
	next(await UserController.findOne(req)),
);
router.post('/', async (req: Request, _res, next: NextFunction) =>
	next(await UserController.save(req)),
);
router.put('/:id', async (req: Request, _res, next: NextFunction) =>
	next(await UserController.update(req)),
);
router.delete('/:id', async (req: Request, _res, next: NextFunction) =>
	next(await UserController.remove(req)),
);

export default router;
