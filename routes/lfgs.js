import { Router } from 'express'
import * as lfgsCtrl from '../controllers/lfgs.js'

const router = Router()

// GET -- localhost:3000/lfgs
router.get('/', lfgsCtrl.index)

// GET -- localhost:3000/lfgs/new
router.get('/new', lfgsCtrl.new)

// GET -- localhost:3000/lfgs/:id
router.get('/:id', lfgsCtrl.show)

// GET -- localhost:3000/lfgs/:id/edit
router.get('/:id/edit', lfgsCtrl.edit)

// POST -- localhost:3000/lfgs
router.post('/', lfgsCtrl.create)

export {
  router
}
