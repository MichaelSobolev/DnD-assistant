const express = require('express');
const dndApi = require('../api/dndApi')
const { Sheet } = require('../db/models')

const router = express.Router();
const loginAuth = require('../middlewares/login');

router.get('/', loginAuth, async (req, res) => {
  let rules = (await dndApi('https://www.dnd5eapi.co/api/rule-sections/')).results
  try {
    const userSheets = await Sheet.findAll({
      where: {
        user_id: req.session.userId
      },
      raw: true,
    })
    res.render('index', { rules, userSheets })
  } catch (err) {
    res.render('login')
  }
});



module.exports = router;
