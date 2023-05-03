# OnlineChess

## developers

``` bash

cd /server
npm install
node server

# Change the Dev variable in main.js to true
var Dev = true
npm run build
# Change the Dev variable in main.js to false

rm -rf server/public/static
cp dist/static -r server/public/static
rm server/views/client.html
cp dist/index.html server/views/client.html
```