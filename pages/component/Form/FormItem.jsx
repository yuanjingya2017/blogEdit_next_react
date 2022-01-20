import * as React from 'react';
import formStyle from './Form.module.scss';

export const FormItem = (props) => {
    console.log(props, '-----props')
    const { children , name  , handleChange , value , label , type } = props;
    const onChange = (value) => {
        /* 通知上一次value 已经改变 */
        handleChange(name,value)
    }
    return <div className={formStyle.form_item}>
        <span>{label}</span>
        {
            React.isValidElement(children) && children.type.displayName == 'input' ? React.cloneElement(children, {
                onChange, value, ...children.props
            }) : null
        }
    </div>
}
FormItem.displayName = 'formItem'