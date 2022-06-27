import { Router } from 'express'
import * as gamesCtrl from '../controllers/games.js'

const router = Router()

// GET -- localhost:3000/games/new
router.get('/new', gamesCtrl.new)

// POST -- localhost:3000/games
router.post('/', gamesCtrl.create)

export {
  router
}
