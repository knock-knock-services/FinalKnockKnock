const sgMail= require('@sendgrid/mail')
const sendAPIKey='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'

sgMail.setApiKey(sendAPIKey)




const sendRegMail=(mail,otp)=>{
  console.log('in account')
 // console.log(mail,otp)
    sgMail.send({

        to:mail,
        from:'komatreddy449@gmail.com',
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

