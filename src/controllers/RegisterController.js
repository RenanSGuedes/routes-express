const Entity = require('../models/Entity')
const axios = require('axios')

module.exports = {
    async store(request, response) {
        const { username, age, latitude, longitude } = request.body

        let entity = await Entity.findOne({ username })
        
        if(!entity) {
            const apiResponse = await axios.get(`https://api.github.com/users/${ username }`)

            const { avatar_url } = apiResponse.data
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude] // Seguir essa ordem!!!
            }

            entity = await Entity.create({
                username,
                age,
                location,
                avatar_url
            })
        }

        console.log({});
        return response.json({})
    }
}