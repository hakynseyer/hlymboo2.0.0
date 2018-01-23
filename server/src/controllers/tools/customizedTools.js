const time = {
  currentTime (time) {
    let res = null
    let currentTime = new Date()

    switch (time) {
      case 'ms':
        res = currentTime.getTime()
        break
    }

    return res
  }
}

const text = {
  clearSpaces (data) {
    return data.replace(/ /g, '_')
  },
  masterKey (size) {
    let key = ''
    const characters = '0HJK19LQW8mn0bzlE2RTv9cxYUIO31PkjhgfdsB4NM87ap2SDFG5oi6uyt3rew6qZXC75VA4'
    for (let c = 0; c < size; c++) key += characters.charAt(Math.floor(Math.random() * characters.length))
    return key
  }
}

const email = {
  sendEmail (msg) {
    const nodemailer = require('nodemailer')
    const config = require('../../config/config')

    let transport = nodemailer.createTransport({
      host: config.email.host,
      port: config.email.port,
      secure: true,
      auth: {
        user: config.email.account.user,
        pass: config.email.account.password
      }
    })
    // console.log(msg)
    return transport.sendMail(msg)
  }
}

module.exports = {time, text, email}
