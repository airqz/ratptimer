
import compression from 'compression'
import express from 'express'

import routing from './routing'


const app = express()

app.use(compression())
app.use(favicon('public/img/favicon.ico'))

routing(app)
