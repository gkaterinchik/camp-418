const router = require('express').Router();

const controller = require('./game');


router.get('/getField', (req, res) => {
  res.send(200,controller.getField());
});


router.post('/move', (req, res) => {
  controller.makeMove(req.body.x, req.body.y);
  let x = req.body.x;
  let y = req.body.y;

  res.send(200, controller.error);
});
router.get('/checkWin', (req, res) => {
  res.send(200, controller.checkWin());
});

router.post('/preset', (req, res) => {
  res.send(200, controller.presetField(req.body.field));
});


router.post('/player', (req, res) => {
  res.send(200, controller.setCurrentPlayer(req.body.p));
});


module.exports = router;
