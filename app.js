const http = require('http')
const port = 3000

const server = http.createServer(function (req, res) {



})

server.listen(port, function(error) {
    if(error) {
        console.log('Something is wrong', error)
    }   else {
        console.log('Server listening on port ' + port)
    }
})