const express = require('express');

const response = require('../../../network/response');

const router = express.Router();

router.get('/', (_, res) => {
    response.success(res, 'Todo correcto', 200);
});

module.exports = router;