import React from 'react';
import { connect } from 'react-redux';


const PosterSort = (props) => {

    return (
        <button className={"sortButton sortButton--poster" + props.sortPoster} onClick={props.sortPosterHandler}>Author <i>{props.sortPoster}</i></button>
    );
}

const mapStateToProps = (state) => ({
    sortPoster: state.sortPoster
});


const mapDispatchToProps = (dispatch) => {

    return {
        sortPosterHandler: () => {

            dispatch({
                type: 'toggle_sort_by_poster'
            });
        }
    }
};

const ConnectedPosterSort = connect(mapStateToProps, mapDispatchToProps)(PosterSort);

export default ConnectedPosterSort;