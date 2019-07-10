import express from 'express'
import SS from '../services/SquirrelsService'

let _ss = new SS()

export default class SquirrelsController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllSquirrels)
      .get('/:squirrelId', this.getSquirrelById)
      .post('', this.addSquirrel)
      .delete('/:squirrelId', this.adoptSquirrel)
      .put('/:squirrelId', this.editSquirrel)
  }

  getAllSquirrels(req, res, next) {
    let squirrels = _ss.getAllSquirrels()
    return res.send(squirrels)
  }

  getSquirrelById(req, res, next) {
    let squirrel = _ss.getSquirrelById(req.params.squirrelId)
    if (!squirrel) {
      res.status(400).send("There is no squirrel here.")
    }
    res.send(squirrel)
  }

  addSquirrel(req, res, next) {
    let newSquirrel = _ss.addSquirrel(req.body)
    res.send(newSquirrel)
  }

  adoptSquirrel(req, res, next) {
    _ss.adoptSquirrel(req.params.squirrelId)
    res.send("Squirrel succesfully adopted")
  }

  editSquirrel(req, res, next) {
    _ss.editSquirrel(req.params.squirrelId, req.body)
    res.send("squirrel updated")
  }


}