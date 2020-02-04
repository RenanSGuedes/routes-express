const Entity = require('../models/Entity')

module.exports = {
    destroy(request, response) {
        const nameParam = request.params.username

        const entitieDeleted = Entity.deleteOne({
            username: nameParam, 
        }, (err) => {
            if (!err) {
                console.log("...User excluded")
            } else {
                console.log("...Exclusion error")
            }
        })
        
        console.log(entitieDeleted)
        return response.json('User ' + nameParam + ' excluded')
    }
}