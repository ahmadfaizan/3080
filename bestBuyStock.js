const axios = require('axios')
const player = require('play-sound')(opts = {})

const checkStock = async (url) => {
  const response = await axios.get(url)
  let searchStatus = (response.data.search('"status":"ComingSoon"'))
  if (searchStatus === -1) {
    console.info('In Stock')
    return true
  } else {
    console.info('Still waiting')
    return false
  }
}

const inStockHandler = () => {
 player.play('./alarm.wav', function (err) {
   if (err) throw err;
   console.log("Audio finished");
 });
}

const notifyInStock = async (url) => {
  const keepChecking = setInterval(() => {
    checkStock(url).then(isInStock => {
      if (isInStock) {
        clearInterval(keepChecking)
        inStockHandler()
      } 
    })
  }, 5000)
}

module.exports = {
  notifyInStock: notifyInStock
}