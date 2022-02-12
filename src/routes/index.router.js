const express = require('express');
const dndApi = require('../api/dndApi')
const { Sheet } = require('../db/models')

const router = express.Router();
const loginAuth = require('../middlewares/login');

const dateSortCallback = (first, second) => {
  var firstDate = new Date(first.updatedAt);
  var secondDate = new Date(second.updatedAt);
  return secondDate - firstDate;
}

router.get('/', loginAuth, async (req, res) => {
  let rules = (await dndApi('https://www.dnd5eapi.co/api/rule-sections/')).results
  try {
    let userSheets = await Sheet.findAll({
      where: {
        user_id: req.session.userId
      },
      raw: true,
    })
    const lastSheet = userSheets.pop()
    userSheets = userSheets.sort(dateSortCallback)
    console.log(lastSheet)

    res.render('index', { rules, userSheets, lastSheet })
  } catch (err) {
    res.render('login')
  }
});


module.exports = router;
