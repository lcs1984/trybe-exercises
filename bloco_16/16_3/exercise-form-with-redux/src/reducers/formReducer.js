
const INITIAL_STATE = {
    name:'',
    email:'',
    cpf:'',
    address:'',
    city:'',
    stateOfCountry:'',
    houseType:'',
    summaryCV:'',
    job:'',
    jobDescription:''
}

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return {...state,
                 name: state.name.concat(action.payload.name)}
                 
        default:
            return state;
    }
}

export default formReducer;

