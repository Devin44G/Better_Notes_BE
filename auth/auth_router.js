const User = require('../api/users/user_model');
const auth_router = require('express').Router();

auth_router.post('/register', (req, res) => {
  const user_info = req.body;

  if(!user_info.username && !user_info.password) {
    res.status(400).json({ message: "Missing one or all of the required inputs => Username, Password" });
  }
  else {
    User.add(user_info)
      .then(user => {
        res.status(201).json({ message: "You have successfully registered!", user });
      })
      .catch(err => {
        res.status(500).json({ message: "Error registering user", error: err });
      });
  }
});

auth_router.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findBy({ username })
    .then(user => {
      if(user && password == user.password) {
        res.status(200).json({ id: user.id, welcome: user.username });
      }
      else {
        console.log(password, user.password);
        res.status(401).json({ message: "Invalid credentials, please enter valid username and password" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error logging in", err: err });
    });
});


module.exports = auth_router;
