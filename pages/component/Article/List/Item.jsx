import * as React from 'react';
import itemStyle from './Item.module.scss';
export const Item = (props) => {
    console.log(props, '===props')
    const {
        name,
        link,
        time,
        comment
    } = props;
    return <a className={itemStyle.article_item} href={link}>
        <span className={itemStyle.title}>{name}</span>
        <div className={itemStyle.right}>
            <span>{time}</span>
            <span>{comment}条评论</span>
        </div>
    </a>
}