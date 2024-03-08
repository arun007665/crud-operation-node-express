const express=require('express')
const cors=require('cors')
//settinng for env secret file
const dotenv=require(`dotenv`)
dotenv.config()
const PORT=process.env.PORT


const connectdb=require(`./db/connect`)
//express instanace
const app=express()

//body parser middlesware
app.use(express.urlencoded({extended:true}))
app.use(express.json())//json format data

//cors=> cross origin resorce-sharing
app.use(cors())

app.use(`/`,require(`./route/userroute`))
// default route


app.listen(PORT,()=>{
    connectdb()
    console.log(`server is running @http://localhost:${PORT}`)
})