import {loadPlantsInProgress,loadPlantsSuccess,loadPlantsFailure} from './actions';

export const loadPlants = () => async (dispatch, getState)=>{
    try
    {
        dispatch(loadPlantsInProgress());
        const response = await fetch('https://localhost:5001/plants');
        const plants = await response.json();
        dispatch(loadPlantsSuccess(plants));
    }catch(e){
        dispatch(loadPlantsFailure());
        console.log("something went wrong")
    }
}