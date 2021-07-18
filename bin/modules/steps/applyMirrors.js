const readFile = require('../utilities/readFile')
const writeFile = require('../utilities/writeFile')
const replaceAll = require('../utilities/replaceAll')
const scanDirectory = require('../utilities/scanDirectory')
const ProgressBar = require('progress');
const __ = require('../utilities/addSpacesToString')(require('../../config').progressBarTrailingLength)

const MIRRORS = require('../../config').mirrors

const applyMirrors = () => {
    scanDirectory('./bucket/').then((files) => {
        const bar = new ProgressBar(`${__('Applying mirrors')}[:bar]`, { total: files.length });
        for (const file of files) {
            readFile(file, 'utf8').then((content) => {
                for (const source in MIRRORS) {
                    content = replaceAll(content, source, MIRRORS[source])
                }
                writeFile(file, content).then(() => {
                    bar.tick()
                })
            })
        }
    })
}

module.exports = applyMirrors
