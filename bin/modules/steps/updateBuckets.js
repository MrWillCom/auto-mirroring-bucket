const dugite = require('dugite');
const fs = require('fs');
const copyFile = require('../utilities/copyFile')
const ProgressBar = require('progress');

const updateBuckets = () => {
    return new Promise((resolve, reject) => {
        fs.readdir('./source', async (err, items) => {
            if (err) reject(err)
            for (const item of items) {
                const repoPath = `./source/${item}`
                const pullResult = await dugite.GitProcess.exec(['pull'], repoPath)
                if (pullResult.exitCode === 0) {
                    const items = fs.readdirSync(`${repoPath}/bucket`)
                    const bar = new ProgressBar(`Updating bucket ${item} [:bar]`, { total: items.length });
                    for (const item of items) {
                        const stat = fs.statSync(`${repoPath}/bucket/${item}`)
                        if (stat.isFile()) {
                            await copyFile(`${repoPath}/bucket/${item}`, `./bucket/${item}`)
                            bar.tick()
                        }
                    }
                } else {
                    console.error(pullResult.stderr)
                }
            }
            resolve()
        })
    })
}

module.exports = updateBuckets
