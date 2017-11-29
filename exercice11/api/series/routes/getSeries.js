const test = "okokokok"
module.exports = {
    method: 'GET',
    path: '/api/series/',
    handler: (req, h) => {
        console.log('ttt')
        return {
            name: "gilles",
            age: 43,
            isTired: true,
            childrens: ["Anthony", "Bliss"]
        }

    }
}
