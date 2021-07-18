import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateComplimentController } from './controllers/CreateComplimentContoller'

import { ensureAuthenticated } from './middleware/ensureAuthenticated'
import { ensureAdmin } from './middleware/ensureAdmin'
import { ensureAllowed } from './middleware/ensureAllowed'

import { AuthenticateUserController } from './controllers/AuthenticateUserController'

import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'

import { DeleteUserController } from './controllers/DeleteUserController'

import { UpdateUserController } from './controllers/UpdateUserController'
import { ForgotPasswordController } from './controllers/ForgotPasswordController'

import { validateToken } from './middleware/validateToken'
import { ResetPasswordController } from './controllers/ResetPasswordController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

const listUserSendComplimentsController =
  new ListUserSendComplimentsController()
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

const deleteUserController = new DeleteUserController()

const updateUserController = new UpdateUserController()

const forgotPasswordController = new ForgotPasswordController()
const resetPasswordController = new ResetPasswordController()

/**
 * Routes to create, read, update and delete users
 *
 * @POST '/users'       create a new member
 * @GET '/users'        read all members
 * @PUT '/users/id'     update a specific member
 * @DELETE '/uses/id'   delete a specific member
 */

router.post('/users', createUserController.handle)
router.get('/users', ensureAuthenticated, listUsersController.handle)
router.put(
  '/users/:id',
  ensureAuthenticated,
  ensureAllowed,
  updateUserController.handle
)
router.delete(
  '/users/:id',
  ensureAuthenticated,
  ensureAllowed,
  deleteUserController.handle
)

/**
 * Routes to reset password
 *
 * @POST '/forgot'          generates a new token and send it to email
 * @POST '/reset/:token'    reset password by generated token
 * @POST '/reset'           reset password by authentication
 */

router.post('/forgot', forgotPasswordController.handle)
router.post('/reset/:token', validateToken, resetPasswordController.handle)
router.post('/reset', ensureAuthenticated, resetPasswordController.handle)

/**
 * Routes to create and read tags
 *
 * @POST '/tags'       create a new tag
 * @GET '/tags'        read all tags
 */

router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
)
router.get('/tags', ensureAuthenticated, listTagsController.handle)

/**
 * Routes to create and read sended and received compliments
 *
 * @POST '/compliments'                 create a new compliment
 * @GET '/users/compliments/send'       read all sended compliments
 * @GET '/users/compliments/receive'    read all received compliments
 */

router.post(
  '/compliments',
  ensureAuthenticated,
  createComplimentController.handle
)
router.get(
  '/users/compliments/send',
  ensureAuthenticated,
  listUserSendComplimentsController.handle
)
router.get(
  '/users/compliments/receive',
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
)

/**
 * Route to authenticate private routes
 *
 * @POST '/login'     authentication by email and password verification
 */

router.post('/login', authenticateUserController.handle)

export { router }
