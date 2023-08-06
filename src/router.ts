import {Response, Request, Router} from 'express'
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { isAuthenticated } from './middlewares/isAuthenticathed'
import { UpdateUserController } from './controllers/user/UpdateUserController'

import { CreateHairCutController } from './controllers/haircut/CreateHairCutController'
import { ListHaircutController } from './controllers/haircut/ListHaircutController'
import { UpdateHaircutController } from './controllers/haircut/UpdateHaircutController'
import { CheckSubscriptionController } from './controllers/haircut/CheckSubscriptionController'
import { CountHaircutController } from './controllers/haircut/CountHaircutController'
import { DetailHaircutController } from './controllers/haircut/DetailHaircutController'

import { CreateScheduleController } from './controllers/schedule/CreateScheduleController'
import { ListScheduleController } from './controllers/schedule/ListScheduleController'
import { FinishScheduleController } from './controllers/schedule/FinishScheduleController'

const router = Router()
/*Rotas do usuario */

router.post("/users", new CreateUserController().handle)
router.post("/session", new AuthUserController().handle)
router.get("/me", isAuthenticated,  new DetailUserController().handle)
router.put("/users", isAuthenticated, new UpdateUserController().handle)

/*Rotas do Haircut */
router.post("/haircut", isAuthenticated, new CreateHairCutController().handle)
router.get("/haircuts", isAuthenticated, new ListHaircutController().handle)
router.put("/haircut", isAuthenticated, new UpdateHaircutController().handle)
router.get("/haircut/check", isAuthenticated, new CheckSubscriptionController().handle)
router.get("/haircut/count", isAuthenticated, new CountHaircutController().handle)
router.get("/haircut/detail", isAuthenticated, new DetailHaircutController().handle)

/*Rotas do serviço */
router.post("/schedule", isAuthenticated, new CreateScheduleController().handle)
router.get("/schedule", isAuthenticated, new ListScheduleController().handle)
router.delete("/schedule", isAuthenticated, new FinishScheduleController().handle)

export { router }