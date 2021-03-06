const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('./config/db.json')
const middlewares = jsonServer.defaults()

//connect DB

router()


//init middleware
server.use(middlewares)


//define routes





server.use((req,res,next)=>{

    if (req.method === 'POST'){
        req.body.createAt = Date.now()
    }
    next()
})
server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})
