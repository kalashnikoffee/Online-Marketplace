/**
 * Documentation
 * @description
 * @usedIn server.js
 */
const express = require('express');
const router = express.Router();

const { requireSignin, isAuth } = require('../controllers/userAuthController');
const {
  userById,
  addOrderToUserHistory
} = require('../controllers/userController');

const { createOrder } = require('../controllers/orderController');

router.post(
  '/order/create/:userId',
  requireSignin,
  isAuth,
  addOrderToUserHistory,
  createOrder
);

router.param('userId', userById);

module.exports = router;
