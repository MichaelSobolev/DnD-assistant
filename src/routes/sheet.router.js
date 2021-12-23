const express = require('express');
const marked = require('marked');
const json2html = require('json-to-html')
const { Sheet, Characteristic, Hp, Skill_proficiency, Trait } = require('../db/models')
const dndApi = require('../api/dndApi')


const router = express.Router();

function abilityMod(ability){
  return Math.floor((ability - 10)/2)
}



router.route('/new')
  .get(async (req, res) => {
    const newSheet = await Sheet.create(
      {
        name: "Укажите имя",
        class: "Выберите класс",
        race: "Выберите расу",
        inspiration: true,
        user_id: req.session.userId,
      },
      { returning: true, plain: true }
    )
    await Characteristic.create(
      {
        str: '8',
        dex: '8',
        con: '8',
        wis: '8',
        int: '8',
        cha: '8',
        sheet_id: newSheet.id,
      },
      { returning: true, plain: true }
    )
    await Hp.create(
      { sheet_id: newSheet.id },
      { returning: true, plain: true }
    )
    await Skill_proficiency.create(
      {
        athletics: false,
        acrobatics: false,
        sleight_of_hand: false,
        stealth: false,
        arcana: false,
        history: false,
        investigation: false,
        nature: false,
        religion: false,
        animal_handling: false,
        insight: false,
        medicine: false,
        perception: false,
        survival: false,
        deception: false,
        intimidation: false,
        performance: false,
        persuasion: false,
        sheet_id: newSheet.id
      },
      { returning: true, plain: true }
    )

    await Trait.create(
      { sheet_id: newSheet.id },
      { returning: true, plain: true }
    )
    res.redirect(`/sheet/${newSheet.id}`)
  })
  .post(async (req, res) => {
    const newSheet = await Sheet.create(
      {
        name: "Укажите имя",
        race: req.body.race,
        inspiration: true,
        user_id: req.session.userID
      },
      { returning: true, plain: true }
    )
    res.sendStatus(201)
  })

router.route('/:id')
  .get(async (req, res) => {
    console.log('-------------');
    const { id } = req.params
    let classList = (await dndApi('https://www.dnd5eapi.co/api/classes/')).results
    let raceList = (await dndApi('https://www.dnd5eapi.co/api/races/')).results

    const sheet = await Sheet.findOne({ where: { id } }, { raw: true })
    const characteristic = await Characteristic.findOne({ where: { sheet_id: sheet.id } }, { raw: true })
    const hp = await Hp.findOne({ where: { sheet_id: sheet.id } }, { raw: true })
    const skill_proficiency = await Skill_proficiency.findOne({ where: { sheet_id: sheet.id } }, { raw: true })
    const trait = await Trait.findOne({ where: { sheet_id: sheet.id } }, { raw: true })

    const modificators = {
      str_mod: abilityMod(+characteristic.str),
      dex_mod: abilityMod(+characteristic.dex),
      con_mod: abilityMod(+characteristic.con),
      wis_mod: abilityMod(+characteristic.wis),
      int_mod: abilityMod(+characteristic.int),
      cha_mod: abilityMod(+characteristic.cha),
      pas_wis: abilityMod(+characteristic.wis) + 10
    }
    

    res.render('charsheet', { info: sheet.dataValues, classList, raceList, characteristic, hp, skill_proficiency, trait, modificators})
  })
  .put(async (req, res) => {
    const { id } = req.params
    const updatedSheet = await Sheet.update(
      req.body,
      { where: { id } }
    )
    res.sendStatus(201)
  })

router.route('/info/:id').get(async (req, res) => {
  const { id } = req.params

  const sheet = await Sheet.findOne({ where: { id } }, { raw: true })
  res.status(200).json(sheet)
})

router.route('/info/char/:id').get(async (req, res) => {
  const { id } = req.params
  const sheet = await Sheet.findOne({ where: { id } }, { raw: true })
  const char = await Characteristic.findOne({ attributes: ['str', 'dex', 'con', 'wis', 'int', 'cha'] }, { where: { sheet_id: sheet.id } }, { raw: true })
  res.status(200).json(char)
})
  .put(async (req, res) => {
    const { id } = req.params

    const updatedSheet = await Characteristic.update(
      req.body,
      { where: { sheet_id: id } }
    )
    res.sendStatus(201)
  })


router.route('/save/:id')
  .post(async (req, res) => {
    const { id } = req.params
    const { maxhp, currenthp } = req.body
    const { personality, ideals, bonds, flaws } = req.body
    console.log(req.body); // Hp, Skill_proficiency, Trait
    await Hp.update({ max_hp: +maxhp, hp: +currenthp },
      { where: { sheet_id: id } })
    await Trait.update({
      personality_traits: personality,
      ideals, bonds, flaws
    },
      { where: { sheet_id: id } })
    // await Sheet.update(
    //   { race },
    //   { where: { id } })
    // // const updatedSheet = await Characteristic.update(
    // //   req.body,
    // //   { where: { sheet_id: id } }

    res.redirect(`/sheet/${id}`)
    // res.sendStatus(201)
  })



// router.route('/transform')
//   .post(async (req, res) => {
//     // let html = json2html.transform( req.body);
//     console.log('smth ===========');
//     console.log(json2html(req.body));

//     res.status(201).json(json2html(req.body))
//   })


// .get(async (req, res) => {
//   let raceList = (await dndApi('https://www.dnd5eapi.co/api/races/')).results
//   let classList = (await dndApi('https://www.dnd5eapi.co/api/classes/')).results

//   console.log(raceList);
//   res.render('createCharacter', { raceList, classList })
// })



module.exports = router;
