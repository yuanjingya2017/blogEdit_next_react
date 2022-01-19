import Link from 'next/link';
import * as React from 'react'
import {
    Form,
    FormItem,
    Input
} from './component/Form/index'

export default () => {
    const form =  React.useRef(null)
    const submit =()=>{
        /* 表单提交 */
        form.current.submitForm((formValue)=>{
            console.log(formValue)
        })
    }
    const reset = ()=>{
        /* 表单重置 */
        form.current.resetForm()
    }
    return (
        <div>
            <nav>
                <Link href='/about'><a>About</a></Link>
            </nav>
            <p>welcome to next.js</p>
            <Form ref={ form } >
                <FormItem name="name" label="我是"  >
                    <Input  />
                </FormItem>
                <FormItem name="mes" label="我想对大家说"  >
                    <Input   />
                </FormItem>
                <input  placeholder="不需要的input" />
                <input/>
            </Form>
            <div className="btns" >
                <button className="searchbtn"  onClick={ submit } >提交</button>
                <button className="concellbtn" onClick={ reset } >重置</button>
            </div>
        </div>
    )
}