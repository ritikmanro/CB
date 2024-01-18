const express = require("express")
const app = express();
const path = require("path")
const port = 4444;
const Weather = require("./utils/Helper")

const public_folder = path.join(__dirname, 'public')
console.log("public folder", public_folder)
app.use('/', express.static(public_folder))

app.get("/getWeather", async (req, res) => {
  const { city } = req.query;
  Weather.getWeather(city)
  .then(data => {
    console.log("DATA IN APP JS",data)
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})