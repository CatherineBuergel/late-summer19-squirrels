import express from 'express'
import bp from 'body-parser'
let port = 3000
//NOTE express is the actual server framework, we need body parser because it's middlewear used by express
//NOTE make an instance of express so we can actually use it
let server = express()

server.use(bp.json())

//everything above this line is pretty much always the same. make an instance of your server, give it the body parser, and set your port 

//below here we need to register and instantiate our controllers
import SquirrelController from './controllers/SquirrelsController'


server.use('/api/squirrels', new SquirrelController().router)

//you're telling the express framework (server) to use the router in your squirrel controller if the path in the string is sent in
//below is from your squirrel controller. the '.router' portion tells the request to use the corresponding request in the controller's router

// export default class SquirrelsController {
//   constructor() {
//     this.router = express.Router()
//       .get('', this.getAllSquirrels)
//       .get('/:squirrelId', this.getSquirrelById)
//       .post('', this.addSquirrel)
//       .delete('/:squirrelId', this.adoptSquirrel)
//       .put('/:squirrelId', this.editSquirrel)
//   }




server.use('*', (req, res, next) => {
  res.status(404).send("Route not found")
})

server.listen(port, () => { console.log(`Your server is running on port: ${port}, you better go catch it!`) })