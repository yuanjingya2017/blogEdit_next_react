import {
    Form,
    FormItem,
    Input
} from './index';
import * as React from 'react';
import commonformStyle from './commentForm.module.scss';
export default class CommentForm extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const {
            ref, submit, reset
        } = this.props;
        return <div className={commonformStyle.commonform}>
            <Form ref={ ref } >
                <FormItem name="mes" label="留言"  >
                    <Input type='textarea' name='mes' />
                </FormItem>
                <FormItem name="name" label="我是"  >
                    <Input  />
                </FormItem>
                <FormItem name="email" label="邮箱/联系方式"  >
                    <Input   />
                </FormItem>
                <FormItem name="addr" label="个人网址"  >
                    <Input   />
                </FormItem>
                <input  placeholder="不需要的input" />
                <input/>
            </Form>
            <div className={commonformStyle.btns} >
                <button className={commonformStyle.searchbtn}  onClick={ submit } >提交</button>
                <button className={commonformStyle.concellbtn} onClick={ reset } >重置</button>
            </div>
        </div>
    }
}