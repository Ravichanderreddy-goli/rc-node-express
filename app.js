const express = require('express')
const app = express()
const port = process.env.PORT || 3000 

app.get('/about', (req, res) => {
  res.send("About ravi page.")
})
app.get('/contact',(req,res)=>{
    res.send("Contact me page")
})
app.get('/help',(req,res)=>{
    res.send('Help page')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})