// const express = require('express');
// require('dotenv').config()
// const app = express();
// const cors=require('cors');
// const PORT=process.env.PORT ||8090


// app.use(cors());
// app.use(express.json());



// app.get('/',(req,res)=>{
//     try {
//         res.json({nice:'ice'})
//     } catch (error) {
//         console.log(error)
//     }
// })


// app.listen(PORT,()=>{
//     console.log(`listening on post ${PORT}`);
// })

const http = require('http');

http.createServer(function(req, res){
    res.write('nice ice');
    res.end()
}).listen(80)