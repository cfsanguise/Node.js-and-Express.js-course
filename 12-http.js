const http = require('http')

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end('Welcome to our homepage')

    } else if (request.url === '/about') {
        response.end(`We're on our about page`)
    } else {
        response.end(`<h1>Oopsie, you've reached non existing page</h1> <a href='/'>Back home</a>`)
    }

})


server.listen(5000)