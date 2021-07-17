# Auto Mirroring Bucket

This is a automated scoop bucket powered by Node.js.

## What is this?

Auto Mirroring Bucket can contain all the buckets you want, and you can update your buckets and set mirrors for them by running one command.

## Get Started

1. Install Node.js and Yarn.
2. Add Auto Mirroring Bucket:
   ```
   scoop bucket add mirrored https://github.com/MrWillCom/auto-mirroring-bucket.git
   # or you can use https://hub.fastgit.org/MrWillCom/auto-mirroring-bucket.git instead
   ```
3. Go to the directory of Auto Mirroring Bucket:
   ```
   cd ~/scoop/buckets/mirrored
   ```
4. Run:
   ```
   mkdir ./bucket/
   mkdir ./source/
   ```
5. Clone the scoop buckets you like to `./source/`, for example:
   ```
   # hub.fastgit.org is a mirror for github.com
   git clone https://hub.fastgit.org/ScoopInstaller/Main.git ./source/main/
   git clone https://hub.fastgit.org/lukesampson/scoop-extras.git ./source/extras/
   ```
6. Install dependencies:
   ```
   cd ./bin/
   yarn install
   cd ../
   ```
7. Configure Auto Mirroring Bucket by editing `./bin/config.js`
8. Update buckets and apply mirrors for them:
   ```
   yarn start
   ```
9. Then you can install any apps from Auto Mirroring Bucket, for example:
   ```
   scoop install mirrored/git
   ```
