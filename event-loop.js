const fs=require('fs');
const crypto=require('crypto');
const start=Date.now();

setTimeout(()=>console.log('Timer 1 Finished'),0);
setImmediate(()=>console.log("The Immediate 1 finished"));

fs.readFile('./test-file.txt',()=>{
console.log('I/O Finished');
console.log('----------------');

setTimeout(()=>console.log('Timer 2 Finished'),0);
setTimeout(()=>console.log('Timer 3 Finished'),3000);

setImmediate(()=>console.log("The Immediate 2 finished"));
process.nextTick(()=>console.log('Process.netTick'));

crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
    console.log(Date.now()-start,'Cryptography Finished');
});
});

console.log('Hello from the top of the code');