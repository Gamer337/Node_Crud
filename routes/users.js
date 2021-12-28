import express from 'express';
import { createUser,deleteUser,getUser } from '../controllers/users.js';
import { findUser,UpdateUser,patchUser  } from '../controllers/users.js';

const router = express.Router();

// all routes in here are starting with /users
router.get('/', getUser);

router.post('/', createUser);

// /users/2 => req.params { id: 2 } 
router.get('/:id', findUser);

router.delete('/:id', deleteUser);

router.put('/:id', UpdateUser);

router.patch('/:id', patchUser);

export default router;