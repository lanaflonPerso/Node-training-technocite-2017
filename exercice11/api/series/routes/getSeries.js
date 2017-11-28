const test = "okokokok"
module.exports = {
    method: 'GET',
    path: '/api/series/',
    handler: (req, h) => {
        return {
            name: "gilles",
            age: 43,
            isTired: true,
            childrens: ["Anthony", "Bliss"]
        }

    }
}
