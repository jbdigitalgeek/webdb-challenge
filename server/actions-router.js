const actionsRouter = require('express').Router();

const Actions = require('../data/actions-model');

actionsRouter.get('/', (req, res) => {
  Actions.find()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: `${err}` });
    });
});


actionsRouter.post('/', (req, res) => {
  Actions.add(req.body)
    .then(added => {
      res.status(200).json(added);
    })
    .catch(err => {
      res.status(500).json({ error: `${err}` });
    });
});

module.exports = actionsRouter;
