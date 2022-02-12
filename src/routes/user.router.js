const express = require('express');
const bcrypt = require('bcrypt')
const { User } = require('../db/models')
const router = express.Router();

router.route('/login')
  .get((req, res) => {
    res.render('login');
  })
  .put(async (req, res) => {
    try {
      const { email, password } = req.body;
      const userInfo = await User.findOne({ where: { email }, raw: true });
      if (!userInfo) {
        res.status(500).json({ message: `Error: User ${email} is not found!` });
      } else if ((await bcrypt.compare(password, userInfo.password))) {
        req.session.userId = userInfo.id;
        req.session.userName = userInfo.nickname;
        res.sendStatus(200);
      } else {
        res.status(500).json({ message: 'Error: Wrong password!' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

router.route('/registration')
  .get((req, res) => {
    res.render('registration');
  })
  .post(async (req, res) => {
    const { email, password, name } = req.body;
    try {

      const userInfo = await User.findOne({ where: { email }, raw: true });
      console.log(userInfo)
      if (userInfo) {
        res.status(500).json({ message: `Error: User ${email} already exists!` });
      } else {
        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = await User.create({ email, nickname: name, password: hashedPass });
        req.session.userId = newUser.id;
        req.session.userName = newUser.nickname;
        res.sendStatus(200);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  });
router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('auth');

    res.redirect('/');
  });

module.exports = router;
