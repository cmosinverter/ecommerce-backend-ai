import express from 'express';
import { DeliveryOption } from '../models/DeliveryOption.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const deliveryOptions = await DeliveryOption.findAll();
  res.json(deliveryOptions);
});

export default router;
