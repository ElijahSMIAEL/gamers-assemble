import { Router } from 'express'
import * as lfgsCtrl from '../controllers/lfgs.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET -- localhost:3000/lfgs
router.get('/', lfgsCtrl.index)

// GET -- localhost:3000/lfgs/new
router.get('/new', isLoggedIn, lfgsCtrl.new)

// GET -- localhost:3000/lfgs/:id
router.get('/:id', lfgsCtrl.show)

// GET -- localhost:3000/lfgs/:id/edit
router.get('/:id/edit', lfgsCtrl.edit)

// POST -- localhost:3000/lfgs
router.post('/', isLoggedIn, lfgsCtrl.create)

// POST -- localhost:3000/lfgs/:id/reply
router.post('/:id/replies', isLoggedIn, lfgsCtrl.join)

// PUT -- localhost:3000/lfgs/:id
router.put('/:id', isLoggedIn, lfgsCtrl.update)

// DELETE localhost:3000/lfgs/:id
router.delete('/:id', isLoggedIn, lfgsCtrl.delete)

// DELETE localhost:3000/lfgs/:id/replies/:id
router.delete('/:id/replies/:repliesId', isLoggedIn, lfgsCtrl.leaveGroup)

export {
  router
}
