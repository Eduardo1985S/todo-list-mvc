import express from 'express';
import tarefaController from '../controllers/tarefaController.js';

const router = express.Router();

router.get('/', tarefaController.getAll);
router.post('/', tarefaController.create);
router.put('/:id', tarefaController.update);
router.delete('/:id', tarefaController.delete);

export default router;