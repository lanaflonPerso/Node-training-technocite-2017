const test = "okokokok"
module.exports = {
    method: 'POST',
    path: '/api/series/',
    handler: (req, h) => {
        return req.body
    }
}
