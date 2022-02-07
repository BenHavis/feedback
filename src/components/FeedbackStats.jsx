import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats () {
  const { feedback } = useContext(FeedbackContext)

  const calculateAverage = (feedbackList) => {
    let sum = 0
    feedbackList.forEach(fb => sum += fb.rating)
    let avg = sum / feedbackList.length
    avg = avg.toFixed(1).replace(/[.,]0$/, '')
    return isNaN(avg) ? 0 : avg
  }
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {calculateAverage(feedback)}</h4>
    </div>
  )
}

export default FeedbackStats
