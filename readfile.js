const fs=require('fs')
fs.writeFileSync("welcome.txt","Hello Node")
fs.readFile("hello.txt","utf-8",(err,data)=>{
console.log(data)
})