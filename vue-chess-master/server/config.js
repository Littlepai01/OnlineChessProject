//setting database connection
var config = {
  db: {
    options: {},
    uri: process.env.MONGO_URL || 'mongodb://localhost:27017/chessOnline'
  },
    porthttp: process.env.PORT || 3311,
    multicore: false,
    https: true,
    hot: true,
    debug: false
}
module.exports = config;
