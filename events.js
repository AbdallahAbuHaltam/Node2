const EventEmitter=require('events');
const http=require('http');

class Sales extends EventEmitter{
    constructor(){
        super()
    }
}
const myEmtitter=new Sales();

myEmtitter.on('newSale',()=>{
    console.log('There is a new Sale');
});

myEmtitter.on('newSale',()=>{
    console.log('Costumer name is Abdullah');
});

myEmtitter.on('newSale',stock=>{
    console.log(`There are now ${stock} items left in stack`);
});

myEmtitter.emit('newSale',9);

/////////
const server=http.createServer();

server.on('request',(req,res)=>{
    console.log('Request Received');
    console.log(req.url);
    res.end('Request Received');
});

server.on('request',(req,res)=>{
    console.log('Another Request!');
});
server.on('close',()=>{
    console.log('Server Closed!');
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Waiting for requests');
});
