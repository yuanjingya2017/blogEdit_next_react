import Link from 'next/link';
import * as React from 'react';
import ArticleList from './component/Article/List';
import Recommand from './component/Article/Recommend/index';
import indexStyle from './index.module.scss';
export default () => {
    return (
        <div>
            <div className={indexStyle.content}>
                <div className={indexStyle.left}>
                    <ArticleList />
                </div>
                <Recommand />
            </div>
        </div>
    )
}