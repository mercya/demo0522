/**
 * Created by eCRF on 2018/5/23.
 */
import React from 'react'
import { connect }from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'antd';
const Index =({movie})=> (
    <div className="detail fl">
        <h1></h1>

        {movie.map(m=>
                <p>
                    {m.title}
                    {m.releaseYear}
                </p>)}
    </div>
)
const mapStateToProps = state => ({
    movie:state.movie
})
Index.PropTypes={
    // "id": 1,
    // "title": "Star Wars",
    // "releaseYear": "1977"
    movie: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        releaseYear: PropTypes.string.isRequired,
    })).isRequired
}

export default connect(
    mapStateToProps
)(Index)
