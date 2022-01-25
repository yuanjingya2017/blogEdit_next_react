import * as React from 'react';
import searchStyle from './search.module.scss';
import ArticleList from '../component/Article/List';
import Recommand from '../component/Article/Recommend/index';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return <div className={searchStyle.search}>
            <div className={searchStyle.left}>
                    <ArticleList />
            </div>
            <Recommand />
        </div>
    }
}