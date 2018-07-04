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

const SubMenu=Menu.SubMenu

const Basic = () => (
    <Router >
        <div className="clear container-main">
            <div className="fl">
                <Menu
                    style={{width: 240}}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline">
                    <SubMenu key="sub1" title={<span><Icon type="mail"/><span>操作</span></span>}>
                        <Menu.Item key="1"><Link to="/">关于</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/about">话题</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/detail">详情</Link></Menu.Item>

                    </SubMenu>
                </Menu>
            </div>
            <Route exact path="/" component={Index}/>
            <Route path="/about" component={Plan}/>
            <Route path="/topics" component={Index}/>
            <Route path="/detail" component={Index} />
        </div>
    </Router>
)
export default connect()(Basic)
