import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import PlantListItem from './PlantListItem';
import './PlantList.css';
import { loadPlants } from './thunks';

const PlantList = ({ plants=[], isLoading, startLoadingPlants})=>{
    useEffect(()=>{
        startLoadingPlants();
    },[])
    const loadingMessage = <div>Loading Plants...</div>
    const content =(
    <div className="list-wrapper">
        {plants.map((plant, index)=><PlantListItem key={index} plant={plant}/>)}
    </div>);
    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state=>({
    plants: state.plants,
    isLoading: state.isLoading,
})
const mapDipatchToProps= dispatch=>({
    startLoadingPlants: ()=>dispatch(loadPlants()),
})

export default connect(mapStateToProps, mapDipatchToProps)(PlantList);