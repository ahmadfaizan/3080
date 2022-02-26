const axios = require('axios')
const player = require('play-sound')(opts = {})

const checkStock = async (url, tag) => {
  const response = await axios.get(url)
  let searchStatus = (response.data.search('"status":"ComingSoon"'))
  if (searchStatus === -1) {
    console.info(`${tag} is In Stock`)
    return true
  } else {
    console.info(`Still waiting for ${tag}`)
    return false
  }
}

const inStockHandler = () => {
 player.play('./alarm.wav', function (err) {
   if (err) throw err;
   console.log("Audio finished");
 });
}

const notifyInStock = async (url, tag) => {
  const keepChecking = setInterval(() => {
    checkStock(url, tag).then(isInStock => {
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