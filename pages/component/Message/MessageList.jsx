import message from './message.module.scss';
import * as React from 'react';
import { MessageItem } from './MessageItem';

export default class MessageList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            messageList: [
                {
                    name: 'test',
                    time: '2022-02-21',
                    messageleft: 'bababaabababababa'
                },
                {
                    name: 'test',
                    time: '2022-02-21',
                    messageleft: 'bababaabababababa'
                },
                {
                    name: 'test',
                    time: '2022-02-21',
                    messageleft: 'bababaabababababa'
                }
            ]
        }
    }
    render () {
        return <div className={message.message}>
            {
                this.state.messageList.map((item, index) => {
                    return <MessageItem key={`${item.id}_${index}`} {...item} />
                })
            }
        </div>
    }
}