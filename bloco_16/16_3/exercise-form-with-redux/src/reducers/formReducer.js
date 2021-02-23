import {ADD_NAME, ADD_EMAIL } from '../actions/index'

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  stateOfCountry: '',
  houseType: '',
  summaryCV: '',
  job: '',
  jobDescription: '',
}

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NAME:
      return { ...state, name: action.payload.name }
    case ADD_EMAIL:
      return { ...state, name: state.name.concat(action.payload.email) }
    case 'ADD_CPF':
      return { ...state, name: state.name.concat(action.payload.cpf) }
    case 'ADD_ADDRESS':
      return { ...state, name: state.name.concat(action.payload.address) }
    case 'ADD_CITY':
      return { ...state, name: state.name.concat(action.payload.city) }
    case 'ADD_STATE':
      return {
        ...state,
        name: state.name.concat(action.payload.stateOfCountry),
      }
    case 'ADD_HOUSE':
      return { ...state, name: state.name.concat(action.payload.houseType) }
    case 'ADD_SUMMARY':
      return { ...state, name: state.name.concat(action.payload.summaryCV) }
    case 'ADD_JOB':
      return { ...state, name: state.name.concat(action.payload.job) }
    case 'ADD_JOBDESCRIPTION':
      return {
        ...state,
        name: state.name.concat(action.payload.jobDescription),
      }
    default:
      return state
  }
}

export default formReducer
