import { Statistics, FeedbackOptions, Section, Notification} from 'components'
import { useState } from 'react'

export const App = () => {
  const [good, addGood] = useState(0)
  const [neutral, addNeutral] = useState(0)
  const [bad, addBad] = useState(0)

  const feedbackOptions = {good, neutral, bad}

  const addFeedback = e => {
    let feedbackType = e.target.id

    switch(feedbackType){
      case('good'): {
        addGood(good + 1)
        break
      }
      case('neutral'): {
        addNeutral(neutral + 1)
        break
      } 
      case('bad'): {
        addBad(bad + 1)
        break
      }
      default: {
        return
      }
    }

    countTotalFeedback()
    countPositiveFeedbackPercentage()
}

 const countTotalFeedback = () => {
    let total = good + bad + neutral
    return total
 }
      
  const countPositiveFeedbackPercentage = () => {
    const positive = Math.round((good / (good + neutral + bad)) * 100)
    if (good) return positive
    else return 0
  }


    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(feedbackOptions)} onLeaveFeedback={addFeedback}/>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback yet"/>}
      </Section>
    </>
    )
  }
