import * as React from 'react';
import itemStyle from './item.module.scss';
import Link from 'next/link';
export const Item = (props) => {
    const {
        name,
        id,
        time,
        comment
    } = props;
    return <Link key={id} href={`/detail?articleId=${id}`}>
        <a className={itemStyle.article_item}>
            <span className={itemStyle.title}>{name}</span>
            <div className={itemStyle.right}>
                <span>{time}</span>
                <span>{comment}条评论</span>
            </div>
        </a>
    </Link>
}