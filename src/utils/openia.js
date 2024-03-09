import OpenAI from 'openai'



export const chatGPT = async prompt => {
  try {
    console.log(prompt)
   

    console.log(response)

    return response
  } catch (error) {
    return { error: 'Error al generar la respuesta.' }
  }
}
