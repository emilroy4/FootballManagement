const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
 
        res.send('Hello, world - Anything ')
})


module.exports = router