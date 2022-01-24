import * as React from 'react';
import header from './header.module.scss'
export default class Header extends React.Component {
    constructor (props) {
        super(props);
        /**
         * 面包屑如何实现？
         * 层级罗列？
         * 
         */
        console.log(this.router)
        this.state = {
            headerTitle: ['YJY的网络日志', '首页', '文章详情'],
            search: ''
        }
    }
    render () {
        return <div className={header.header} key='header'>
            <div className={header.header_crumb}>
                {
                    this.state.headerTitle.map((item, index) => {
                        return <span key={`header_crumb_${index}`}>{item}-</span>
                    })
                }
            </div>
            <div className={header.header_search}>
                <input value={this.state.search} onChange={(e) => {
                    this.setState({
                        search: e.target.value
                    })
                }} className={header.header_search_input} type="text" placeholder='请输入搜索内容' />
                <span className={header.search_btn} onClick={(e) => {
                    window.location.href = `../?key=${this.state.search}`;
                }}>SEARCH</span>
            </div>
        </div>
    }
}