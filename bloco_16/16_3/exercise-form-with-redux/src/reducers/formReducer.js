import {
  ADD_NAME,
  ADD_EMAIL,
  ADD_CPF,
  ADD_ADDRESS,
  ADD_CITY,
  ADD_STATE,
  ADD_HOUSE,
  ADD_SUMMARY,
  ADD_JOB,
  ADD_JOBDESCRIPTION,
} from '../actions/index'

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
      return { ...state, email: action.payload.email }
    case ADD_CPF:
      return { ...state, cpf: action.payload.cpf }
    case ADD_ADDRESS:
      return { ...state, address: action.payload.address }
    case ADD_CITY:
      return { ...state, city: action.payload.city }
    case ADD_STATE:
      return {
        ...state,
        stateOfCountry: action.payload.stateOfCountry,
      }
    case ADD_HOUSE:
      return { ...state, houseType: action.payload.houseType }
    case ADD_SUMMARY:
      return { ...state, summaryCV: action.payload.summaryCV }
    case ADD_JOB:
      return { ...state, job: action.payload.job }
    case ADD_JOBDESCRIPTION:
      return {
        ...state,
        jobDescription: action.payload.jobDescription,
      }
    default:
      return state
  }
}

export default formReducer
