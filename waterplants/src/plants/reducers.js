import {LOAD_PLANTS_IN_PROGRESS, LOAD_PLANTS_SUCCESS, LOAD_PLANTS_FAILURE} from './actions';

export const isLoading = (state=false,action)=>{
    const {type} = action;
    switch(type){
        case LOAD_PLANTS_IN_PROGRESS:{
            return true;
        }
        case LOAD_PLANTS_SUCCESS:
        case LOAD_PLANTS_FAILURE:
            return false;
        default:
            return state;
    }
}
export const plants=(state=[], action)=>{
    const {type, payload} = action;
    switch(type){
       case LOAD_PLANTS_SUCCESS:{
           const {plants}= payload;
           return plants;
       } 
       case LOAD_PLANTS_IN_PROGRESS:
       case LOAD_PLANTS_FAILURE:
       default:
           return state;
    }
}