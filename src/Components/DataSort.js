import React from 'react';
import { connect } from 'react-redux';


const DataSort = (props) => {
    return (
        <div>
            <label className="sort-label" for="sortSelect">Sort by:</label>
            <select className="sort-select" onChange={props.sortHandler} value={props.sort} id="sortSelect">
                <option value="1">Recent first</option>
                <option value="2">Older First</option>
                <option value="3">Author (A-Z)</option>
                <option value="4">Author (Z-A)</option>
            </select>  
        </div>
    );
}

const mapStateToProps = (state) => ({
    sort: state.sort
});


const mapDispatchToProps = (dispatch) => {
    return {
        sortHandler: (option) => {      
            dispatch({
                type: 'toggle_sort',
                payload: option.target.value
            });
        }
    }
};

const ConnectedDataSort = connect(mapStateToProps, mapDispatchToProps)(DataSort);

export default ConnectedDataSort;