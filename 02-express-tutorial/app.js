const htttp = require('http')
const {readFileSync} = require('fs')
// const home= readFileSync('./index.html')
const home= readFileSync('./navbar-app/index.html')
const homestyle= readFileSync('./navbar-app/styles.css')
const homeImage= readFileSync('./navbar-app/logo.svg')
const homeLogic= readFileSync('./navbar-app/browser-app.js')
const server = htttp.createServer((req, res) => {
    const url=req.url;
    if(url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(home)
    res.end()
}
else if(url ==='/styles.css'){
    res.writeHead(200, {'Content-Type': 'text/css'})
    res.write(homestyle)
    res.end()
}else if(url ==='/logo.svg'){
    res.writeHead(200, {'Content-Type': 'image/svg+xml'})
    res.write(homeImage)
    res.end()
}else if(url ==='/browser-app.js'){
    res.writeHead(200, {'Content-Type': 'text/javascript'})
    res.write(homeLogic)
    res.end()
}
else if(url ==='/nav'){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("Abut Page")
    res.end()
}
    else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>Page not Found</h1>')
    }
})

server.listen(3000, () => {
    console.log('listening on port 3000');
})