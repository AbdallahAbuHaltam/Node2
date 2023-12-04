const fs =require('fs');
const server=require('http').createServer();

 server.on('request',(req,res)=>{
     //Solution1
    // fs.readFile('./test-file.txt',(err,data)=>{
    //    if(err) console.log(err);
    //     res.end(data);
    //  });


    //Solution2 Streams
//     const readable=fs.createReadStream('./test-file.txt');
//     readable.on('data',chunk=>{
//         res.end(chunk);
//     });
//     readable.on('end',()=>{
//         res.end();
//     });
//     readable.on('error',(err)=>{
//         console.log(err);
//         res.statusCode=500;
//         res.end('FILE NOT FOUND');

//     });

//Solution3
    const readable=fs.createReadStream('./test-file.txt');
    readable.pipe(res);
});




server.listen(8000,'127.0.0.1',()=>{
    console.log('Waiting for requests');
});