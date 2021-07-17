const updateBuckets = require('./modules/steps/updateBuckets')
const applyMirrors = require('./modules/steps/applyMirrors')

const main = () => {
    updateBuckets().then(() => {
        applyMirrors()
    })
}

main()
