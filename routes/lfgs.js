import { Router } from 'express'
import * as lfgsCtrl from '../controllers/lfgs.js'

const router = Router()

// GET -- localhost:3000/lfgs
router.get('/', lfgsCtrl.index)

// GET -- localhost:3000/lfgs/new
router.get('/new', lfgsCtrl.new)

export {
  router
}
