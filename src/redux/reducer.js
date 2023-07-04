import { ACTIVE_EMAIL} from './actions'

const initialState = {
    activeModal: false,
}
//Nuestra personita encargada de hacer todo
const rootReducer = (state=initialState, action) => {
    switch (action.type){
        case ACTIVE_EMAIL:
            return{...state, activeModal: action.payload}
        default:
            return {...state}
    }
}

export default rootReducer