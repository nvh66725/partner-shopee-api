const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 9000
app.get('/api/v1/metadata', (_req, res) => {
  try {
    res.status(200).json({ title: 'voucher', description: 'i am vouchers' })
  } catch (error) {
    res.status(400).json()
  }
})
app.get('/api/v1/body-data', (_req, res) => {
  console.log('reun')
  try {
    res.status(200).json({
      error: null,
      data: {
        socialMediaSites: [{ id: 1, name: 'facebook', linkTo: '' }],
        support: {
          title: 'Ho tro',
          linkTo: '',
        },
        languages: [{ id: 1, name: 'Tieng Viet', linkTo: '' }],
        logo: {
          linkTo: '',
        },
        title: 'Thu Thu',
        subTitle: 'dfadsf',
      },
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: { message: 'error get header' } })
  }
})
app.listen(9000, () => {
  console.log('server running')
})
