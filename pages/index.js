import Link from 'next/link';
import * as React from 'react';
import CommentForm from './component/Form/CommentForm';
import Header from './component/layout/Header';
import ArticleList from './component/Article/List';
import Recommand from './component/Article/Recommend/index';
import indexStyle from './index.module.scss';
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
            <Header />
            <div className={indexStyle.content}>
                <div className={indexStyle.left}>
                    <ArticleList />
                    <CommentForm ref={form} />
                </div>
                <Recommand />
            </div>
            <nav>
                <Link href='/about'><a>About</a></Link>
            </nav>
        </div>
    )
}