const dugite = require('dugite');
const fs = require('fs');
const copyFile = require('../utilities/copyFile')
const ProgressBar = require('progress');
const __ = require('../utilities/addSpacesToString')(require('../../config').progressBarTrailingLength)

const updateBuckets = () => {
    return new Promise((resolve, reject) => {
        fs.readdir('./source', async (err, items) => {
            if (err) reject(err)
            for (const item of items) {
                const repoPath = `./source/${item}`
                const gitPullBar = new ProgressBar(`${__(`Pulling bucket ${item}`)}[:bar]`, { total: 1 });
                const pullResult = await dugite.GitProcess.exec(['pull'], repoPath)
                if (pullResult.exitCode === 0) {
                    gitPullBar.tick()
                    const items = fs.readdirSync(`${repoPath}/bucket`)
                    const bar = new ProgressBar(`${__(`Copying bucket ${item}`)}[:bar]`, { total: items.length });
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
