import message from './message.module.scss';
import * as React from 'react';

export const MessageItem = (props) => {
    const {
        name,
        messageleft,
        time
    } = props;
    return <div className={message.message_item}>
        <div className={message.left}>
            <div className={message.top}>{name}说：</div>
            <div className={message.bottom}>@{messageleft}(回复)</div>
            <div className={message.reuseblock}>@{messageleft}(引用)</div>
            <div className={message.bottom}>{messageleft}</div>
        </div>
        <div className={message.right}>{time}<span className={message.line}>|</span><span className={message.reuse}>引用</span></div>
    </div>
}