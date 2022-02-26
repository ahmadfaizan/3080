const bestBuyStock = require('./bestBuyStock')

const testURL = 'https://www.bestbuy.ca/en-ca/product/evga-geforce-rtx-3080-ti-ftw3-ultra-gaming-12gb-gddr6x-video-card/15660439'
const actualURL = 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3080-10gb-gddr6x-video-card/15463567'

bestBuyStock.notifyInStock(actualURL)