const bestBuyStock = require('./bestBuyStock')

const testURL = 'https://www.bestbuy.ca/en-ca/product/evga-geforce-rtx-3080-ti-ftw3-ultra-gaming-12gb-gddr6x-video-card/15660439'
const url3080 = 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3080-10gb-gddr6x-video-card/15463567'
const url3070 = 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3070-8gb-gddr6-video-card-only-at-best-buy/15078017'
const url3060ti = 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3060-ti-8gb-gddr6-video-card/15166285'
const url3070ti = 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3070-ti-8gb-gddr6x-video-card/15530046'
const url3080ti = 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3080-ti-12gb-gddr6x-video-card/15530045'

bestBuyStock.notifyInStock(url3080, '3080')
bestBuyStock.notifyInStock(url3070, '3070')
bestBuyStock.notifyInStock(url3060ti, '3060 TI')
bestBuyStock.notifyInStock(url3070ti, '3070 TI')
bestBuyStock.notifyInStock(url3080ti, '3080 TI')
