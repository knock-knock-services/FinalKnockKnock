const sgMail= require('@sendgrid/mail')
const sendAPIKey='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'

sgMail.setApiKey(sendAPIKey)


  


const sendRegMail=(mail,otp)=>{
  console.log('in account')
 // console.log(mail,otp)
    sgMail.send({

        to:mail,
        from:'aravindreddy449@gmail.com',
        subject:'Confirmation',
        text:otp
        
    })
    .then(() => {
        console.log('Email sent2 hhj')
      })
      .catch((error) => {
        console.error(error)
      })

}

module.exports={
    sendRegMail
}

