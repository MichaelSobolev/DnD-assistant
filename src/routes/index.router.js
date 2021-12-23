const express = require('express');
const dndApi = require('../api/dndApi')
const marked = require('marked');
const { Sheet } = require('../db/models')

const router = express.Router();
const loginAuth = require('../middlewares/login');

router.get('/', loginAuth, async (req, res) => {
  let rules = (await dndApi('https://www.dnd5eapi.co/api/rule-sections/')).results
  const userSheets = await Sheet.findAll({
    where: {
      user_id: req.session.userId
    },
    raw: true,
  })
  res.render('index', { rules, userSheets })
  // res.render('index', { rules })

});

router.get('/test', loginAuth, async (req, res) => {
  res.render('index', { rules })
});


module.exports = router;
