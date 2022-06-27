import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// GET localhost:3000/profiles/index
router.get('/', profilesCtrl.index)

export {
  router
}
