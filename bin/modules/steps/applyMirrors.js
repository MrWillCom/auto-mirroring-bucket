const readFile = require('../utilities/readFile')
const writeFile = require('../utilities/writeFile')
const replaceAll = require('../utilities/replaceAll')
const scanDirectory = require('../utilities/scanDirectory')
const ProgressBar = require('progress');

const BUCKET_PATH = './bucket/'
const MIRRORS = require('../../config').mirrors

const applyMirrors = () => {
    scanDirectory(BUCKET_PATH).then((files) => {
        const bar = new ProgressBar(`Applying mirrors [:bar]`, { total: files.length });
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
