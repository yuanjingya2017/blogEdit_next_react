import * as React from 'react';
import recommend from './index.module.scss';

export default class Recommand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendList: [
                {name: '推荐文章', link: 'www.baidu.com', time: '2022-01-02'},
                {name: '推荐文章', link: 'www.baidu.com', time: '2022-01-02'},
                {name: '推荐文章', link: 'www.baidu.com', time: '2022-01-02'},
                {name: '推荐文章', link: 'www.baidu.com', time: '2022-01-02'},
                {name: '推荐文章', link: 'www.baidu.com', time: '2022-01-02'}
            ]
        }
    }
    render () {
        return <div className={recommend.recommand}>
            <div className={recommend.title}>推荐列表</div>
            <div className={recommend.list}>
                {
                    this.state.recommendList.map(item => {
                        return <div className={recommend.list_item}>
                            <span>{item.name}</span>
                            <span>{item.time}</span>
                        </div>
                    })
                }
            </div>
        </div>;
    }
}