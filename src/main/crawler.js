const Builder = require('cl-naver-crawler/crawler/builder')
const BusinessCrawler = require('cl-naver-crawler/crawler/business')
const StoreFarmCrawler = require('cl-naver-crawler/crawler/storefarm')

export default class Crawler {
  getBusinessCrawler (keyword) {
    return new Builder()
      .setCrawler(BusinessCrawler)
      .setKeyword(keyword)
      .build()
  }

  getStoreFarmCrawler (keyword, category = null) {
    const builder = new Builder()
      .setCrawler(StoreFarmCrawler)
      .setKeyword(keyword)
    if (category) builder.setCategory(category)
    return builder.build()
  }
}
