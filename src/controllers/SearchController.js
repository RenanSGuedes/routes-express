const Entity = require('../models/Entity')

module.exports = {
    async index(request, response) {
        const entities = await Entity.find()

        console.log(entities)
        return response.json(entities)
    }
}