# Auto Mirroring Bucket

This is a automated scoop bucket powered by Node.js.

## What is this?

Auto Mirroring Bucket can contain all the buckets you want, and you can update your buckets and set mirrors for them by running one command.

## Get Started

1. Install Node.js and Yarn.
2. Run:
   ```
   mkdir ./bucket/
   mkdir ./source/
   ```
3. Clone the scoop buckets you like to `./source/`, for example:
   ```
   # hub.fastgit.org is a mirror for github.com
   git clone https://hub.fastgit.org/ScoopInstaller/Main.git ./source/main/
   git clone https://hub.fastgit.org/lukesampson/scoop-extras.git ./source/extras/
   ```
4. Install dependencies:
   ```
   cd ./bin/
   yarn install
   cd ../
   ```
5. Configure Auto Mirroring Bucket by editing `./bin/config.js`
6. Update buckets and apply mirrors for them:
   ```
   yarn start
   ```
