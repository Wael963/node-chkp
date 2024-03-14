const http=require('http')
http.createServer((req,res)=>{
    res.write('HELLO NODE')
    res.end()
}).listen(3000)