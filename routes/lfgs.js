import { Router } from 'express'
import * as lfgsCtrl from '../controllers/lfgs.js'

const router = Router()

// GET -- localhost:3000/lfgs
router.get('/', lfgsCtrl.index)

export {
  router
}
