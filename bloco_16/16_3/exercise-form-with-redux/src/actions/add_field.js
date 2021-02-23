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

const addCpf = (cpf) => ({
  type: ADD_CPF,
  payload: {
    cpf,
  },
})

const addAddress = (address) => ({
  type: ADD_ADDRESS,
  payload: {
    address,
  },
})

const addCity = (city) => ({
  type: ADD_CITY,
  payload: {
    city,
  },
})

const addStateOfCountry = (stateOfCountry) => ({
  type: ADD_STATE,
  payload: {
    stateOfCountry,
  },
})

const addHouseType = (houseType) => ({
  type: ADD_HOUSE,
  payload: {
    houseType,
  },
})

const addSummaryCV = (summaryCV) => ({
  type: ADD_SUMMARY,
  payload: {
    summaryCV,
  },
})

const addJob = (job) => ({
  type: ADD_JOB,
  payload: {
    job,
  },
})

const addJobDescription = (jobDescription) => ({
  type: ADD_JOBDESCRIPTION,
  payload: {
    jobDescription,
  },
})

export {
  addName,
  addEmail,
  addCpf,
  addAddress,
  addCity,
  addStateOfCountry,
  addHouseType,
  addSummaryCV,
  addJob,
  addJobDescription,
}
