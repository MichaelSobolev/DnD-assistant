const express = require('express');
const marked = require('marked');

const dndApi = require('../api/dndApi')


const router = express.Router();

router.route('/:index')
  .get(async (req, res) => {
    const { index } = req.params
    let description = await dndApi(`https://www.dnd5eapi.co/api/rule-sections/${index}`)
    
    const ruleDescription = marked.parse(description.desc)
    console.log(description);
    res.render('ruleDescription', { description, ruleDescription })
  })

module.exports = router;
