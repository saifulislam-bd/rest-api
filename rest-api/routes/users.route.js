const express = require('express');
const {
    getAllUSers,
    createUSer,
    updateUSer,
    deleteUSer,
} = require('../controllers/users.controller');

const router = express.Router();

router.get('/', getAllUSers);
router.post('/', createUSer);
router.put('/:id', updateUSer);
router.delete('/:id', deleteUSer);

module.exports = router;
