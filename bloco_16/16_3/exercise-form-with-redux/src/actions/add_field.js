import { ADD_NAME, ADD_EMAIL } from '../actions/index';

const addName = (name) => ({
  type: ADD_NAME,
  payload: {
    name,
  },
})

const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: {
    email,
  },
})

export { addName, addEmail }
