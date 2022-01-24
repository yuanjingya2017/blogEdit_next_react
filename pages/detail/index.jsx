import * as React from 'react';
import CommentForm from '../component/Form/CommentForm';
import MessageList from '../component/Message/MessageList';
import Recommand from '../component/Article/Recommend/index';

import detailStyle from './detail.module.scss';

export default class Detail extends React.Component {
    constructor (props) {
        super(props);
        const form =  React.createRef(null);
        this.state = {
            form
        }
    }
    submit =()=>{
        /* 表单提交 */
        form.current.submitForm((formValue)=>{
            console.log(formValue)
        })
    }
    reset = ()=>{
        /* 表单重置 */
        form.current.resetForm()
    }
    render () {
        return <div className={detailStyle.detail}>
            <div className={detailStyle.detail_content}>
                <h2 className={detailStyle.title}>
                    title
                </h2>
                <div className={detailStyle.detail_content_info}>作者：babababaaba</div>
                <div className={detailStyle.detail_content_info}>日期：2020-02-02</div>
                <div className={detailStyle.detail_content_detail}>
                    babababaabababababaabababababaabababababaabababababaabababababaabababababaabababababaabababababaaba
                    babababaabababababaabababababaabababababaabababababaabababababaabababababaabababababaabababababaaba
                    babababaabababababaabababababaabababababaabababababaabababababaabababababaabababababaabababababaaba
                    babababaabababababaabababababaabababababaabababababaabababababaabababababaabababababaabababababaaba
                    babababaabababababaabababababaabababababaabababababaabababababaabababababaabababababaabababababaaba
                    babababaabababababaabababababaabababababaabababababaabababababaabababababaabababababaabababababaaba

                </div>
            </div>
            <Recommand />
            <CommentForm ref={this.state.form} />
            <MessageList />
        </div>
    }
}