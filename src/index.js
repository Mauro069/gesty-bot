import express from 'express'
import { chatGPT } from './utils/openia.js'
import OpenAI from 'openai'

const app = express()
const port = 3000

app.use(express.json())

const openai = new OpenAI({
  apiKey: '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'
})

app.post('/generate-response', async (req, res) => {
  const { prompt } = req.body

  const response = await openai.chat({
    prompt,
    model: 'text-davinci-003',
    max_tokens: 150
  })

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
  console.log(response)
  console.log(chatCompletion)

  res.json(response)
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
