const test = "okokokok"
module.exports = {
    method: 'GET',
    path: '/api/series/',
    handler: (req, h) => {
        // console.log(req)
        console.log(h);
        return 'hello world'
    }
}
