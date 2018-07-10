/**
 * Created by eCRF on 2018/7/3.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom'
import {connect} from 'react-redux'
import Plan from './Plan'
import {Menu ,Icon} from 'antd'
import Index from './Detail';
import Topic from './Topic';
import { Row, Col,Button } from 'antd';

const SubMenu=Menu.SubMenu

const Basic = () => (
    <Router >
        <div className="container-main">
            <div className="App">
                <Row>
                    <Col span={6}><Button className="button"><Link to="/">关于</Link></Button></Col>
                    <Col span={6}><Button className="button"><Link to="/about">话题</Link></Button></Col>
                    <Col span={6}><Button className="button"><Link to="/detail">详情</Link></Button></Col>
                    <Col span={6}><Button className="button"><Link to="/my">我</Link></Button></Col>
                </Row>
                <Route exact path="/" component={Index}/>
                <Route path="/about" component={Plan}/>
                <Route path="/topics" component={Topic}/>
                <Route path="/detail" component={Topic} />
            </div>
        </div>
    </Router>

)
export default connect()(Basic)
