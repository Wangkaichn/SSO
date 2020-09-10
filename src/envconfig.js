const { origin } = window.location

let newOrigin = ''
if (origin.includes('localhost')) {
  newOrigin = 'http://localhost:4000'
} else {
  // 应指向线上地址
  newOrigin = 'http://www.baidu.com'
}

export default newOrigin