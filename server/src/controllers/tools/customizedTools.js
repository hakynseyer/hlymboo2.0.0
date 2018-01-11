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

module.exports = {time, email}
