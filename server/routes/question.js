// exports questionRoute

import Question from '../models/Question'
import Answer from '../models/Answer'

exports.GetContents = async (req, res) => {
  // TODO : get questions from mongodb and return to frontend

  const questions = await Question.find()
  console.log(questions)

  if(questions) {
    const object = ({
      message: 'success',
      contents: questions
    })
    return res.status(200).send(object)
  } else {
    const object = ({
      message: 'error',
      contents: []
    })
    return res.status(403).send(object)
  }
}

exports.CheckAns = async (req, res) => {
  // TODO : get answers from mongodb,
  // check answers coming from frontend and return score to frontend
}
