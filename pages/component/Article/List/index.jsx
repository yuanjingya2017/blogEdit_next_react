import * as React from 'react';
import { Item } from './Item';
import Articlelist from './Articlelist.module.scss';
export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articleList: [{name: 'fsfsafffsfa', link: 'www.baidu.com', comment: 12, time: '2022-01-01'}]
        }
    }
    render () {
        return (<div className={Articlelist.article_list}>
            {this.state.articleList.map(item => {
                return <Item {...item} />
            })}
        </div>)
    }
}