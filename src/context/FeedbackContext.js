import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 9
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 7
    }
  ])

  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // Add feedback
  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Delete feedback
  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(data => data.id !== id))
    }
  }

// Update feedback item
const updateFeedback = async (id, updItem) => {
	const response = await fetch(`/feedback/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(updItem),
	})

	const data = await response.json()

	setFeedback(
		feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
	)

	setfeedbackEdit({
		item: {},
		edit: false,
	})
}


  // Set item to be updated
  const editFeedback = item => {
    setfeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider value={{
      feedback,
      deleteFeedback,
      updateFeedback,
      addFeedback,
      editFeedback,
      feedbackEdit // piece of state that holds the item in a boolean
    }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
