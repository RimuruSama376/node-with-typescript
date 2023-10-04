import * as http from 'http'

const server = http.createServer((req, res) => {
    console.log('myLog') // TODO remove before merging into master
})

server.listen(3000)