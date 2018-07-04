/**
 * Created by eCRF on 2018/7/3.
 */

import React from 'react'
import {connect} from 'react-redux'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import Button from 'antd';

const Index = ({count, history}) => {

    const getLocalTime = (nS) =>{
        return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ')
    }
    const list=()=>{
        var lis = []
        for(let i=0;i<10;i++){
            lis.push(
                <div>
                    {getLocalTime(i)}
                </div>
            )
        }
        return lis
    }
    return (
        <div className="plan fl">
            {list()}
        </div>
    )
}
export default connect(
)(Index)
