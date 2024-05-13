const express = require('express')
const cors = require('cors');
const app = express()
const port = 8080
app.use(cors());
import models from '../frontend/src/modelData/models';
const userList = models.userListModel();

app.get('/user/list',(req,res)=>{
  const user = Object.keys(userList).map(key =>({
    _id: key,
  first_name: userList[key].first_name,
  last_name: userList[key].last_name,
  location: userList[key].location,
  description: userList[key].description,
  occupation: userList[key].occupation,
  }));
  res.json(user);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})