let BASE_URL1 = ''
if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL1 = 'http://152.136.185.210:5000'
} else {
  // 开发环境
  BASE_URL1 = 'http://152.136.185.210:5000'
}

export const TIME_OUT1 = 10000
export { BASE_URL1 }
