
let _squirrels = [{ name: 'Rocky', id: 0, rabid: true }, { name: 'Fred', id: 1, rabid: false }]

export default class SquirrelsService {
  adoptSquirrel(squirrelId) {
    let index = _squirrels.findIndex(s => s.id == squirrelId)
    _squirrels.splice(index, 1)
    //splice is an ARRAY method, the first argument tells it where to 'cut', the second argument tells it how much to cut and the third argument tells it what to replace the cut object with. the second and third arguments are optional.
  }

  getAllSquirrels() {
    return _squirrels
  }

  editSquirrel(squirrelId, body) {
    let index = _squirrels.findIndex(s => s.id == squirrelId)
    _squirrels.splice(index, 1, body)
  }
  addSquirrel(body) {
    let newSquirrel = {
      id: _squirrels.length,
      name: body.name,
      rabid: body.rabid
    }
    _squirrels.push(newSquirrel)
    return newSquirrel
  }
  getSquirrelById(Id) {
    return _squirrels.find(s => s.id == Id)
  }





}