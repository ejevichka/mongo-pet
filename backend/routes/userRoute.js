import { getUsers, getUserById, postForm } from "../controllers/userController.js";
import express from 'express'
const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getUsers)

// express router method to create route for getting users by id
router.route('/:id').get(getUserById)

// express router method to create route for getting users by id
router.route('/form/').post(postForm)

export default router
