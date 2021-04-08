export const LOAD_PLANTS_IN_PROGRESS = "LOADS_PLANTS_IN_PROGRESS";
export const loadPlantsInProgress = ()=>({
    type: LOAD_PLANTS_IN_PROGRESS,
})

export const LOAD_PLANTS_SUCCESS = "LOAD_PLANTS_SUCCESS";
export const loadPlantsSuccess = plants =>({
    type: LOAD_PLANTS_SUCCESS,
    payload: {plants},
})
export const LOAD_PLANTS_FAILURE = "LOAD_PLANTS_FAILURE";
export const loadPlantsFailure = ()=>({
    type: LOAD_PLANTS_FAILURE,
})