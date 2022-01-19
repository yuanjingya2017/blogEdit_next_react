import { Fragment } from "react/cjs/react.production.min"
import * as React from 'react'

export const FormItem = (props) => {
    const { children , name  , handleChange , value , label  } = props;
    const onChange = (value) => {
        /* 通知上一次value 已经改变 */
        handleChange(name,value)
    }
    return <div className='form'>
        <span>{label}</span>
        {
            React.isValidElement(children) && children.type.displayName == 'input' ? React.cloneElement(children, {
                onChange, value
            }) : null
        }
    </div>
}
FormItem.displayName = 'formItem'