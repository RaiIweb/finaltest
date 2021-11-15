# Getting Started with Ping Pong Game

[ this game will currently not work in dev mode because backend api is no cors enabled with localhost yet]

This project is based on ping pong game. It is now in single player mode with ai as other player. Wins and loose 
count is stored in backend api 

## How to run


New user have to sign up first , then login to start game. Login sessions will be destroyed after 10 mins .


## How to start in dev


Use yarn start to run in dev mode .

## How to deploy


To deploy on github pages , first edit 'homepage' field in 
package.json according to repository name . Push code to remote github repository in main/master branch .

After pushing code run 'yarn deploy' . It automatically deploys app on github pages . Link will be available in
github repository pages settings






