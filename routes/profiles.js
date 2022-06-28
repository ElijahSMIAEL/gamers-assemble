import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// GET localhost:3000/profiles/index
router.get('/:id', profilesCtrl.index)

// PATCH localhost:3000/profiles/:id
router.patch('/:id', profilesCtrl.update)

export {
  router
}
