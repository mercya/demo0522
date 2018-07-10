/**
 * Created by eCRF on 2018/7/10.
 */
import { RefreshControl, ListView } from 'antd-mobile';
import React from 'react';
import {connect} from 'react-redux'
const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: '某商品',
        des: '就那样',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: '某商品2',
        des: '。。。。',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '某商品3',
        des: '没描述',
    },
];
let index = data.length - 1;

let pageIndex = 0;
class Topic extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,});

        this.initData = [];
        for (let i = 0; i < 20; i++) {
            this.initData.push(`r${i}`);
        }
        this.state = {
            dataSource: dataSource.cloneWithRows(this.initData),
            refreshing: false,
        };
    }

    onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.initData = [`ref${pageIndex++}`, ...this.initData];
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.initData),
                refreshing: false,
            });
        }, 1000);
    };
    onScroll = () => {
        console.log('sss');
    };

    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID}
                     style={{
                         padding: '0.08rem 0.16rem',
                         backgroundColor: 'white',
                     }}
                >
                    <h3 style={{padding: 2, marginBottom: '0.08rem', borderBottom: '1px solid #F6F6F6'}}>
                        {obj.title}
                    </h3>
                    <div style={{display: '-webkit-box', display: 'flex'}}>
                        <img style={{height: '1.28rem', marginRight: '0.08rem'}} src={obj.img}/>
                        <div style={{display: 'inline-block'}}>
                            <p>{obj.des}-{rowData}</p>
                            <p><span style={{fontSize: '1.6em', color: '#FF6E27'}}>35</span>元/任务</p>
                        </div>
                    </div>
                </div>
            );
        };
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={row}
                renderSeparator={separator}
                initialListSize={5}
                pageSize={5}
                scrollRenderAheadDistance={200}
                scrollEventThrottle={20}
                onScroll={this.onScroll}
                style={{
                    height: document.documentElement.clientHeight,
                    border: '1px solid #ddd',
                    margin: '0.1rem 0',
                }}
                scrollerOptions={{scrollbars: true}}
                refreshControl={<RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />}
            />
        );
    }

}
export default connect()(Topic)