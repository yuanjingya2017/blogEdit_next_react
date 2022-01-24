import * as React from 'react';
import formStyle from './form.module.scss';

export default class Form extends React.Component {
    constructor (props, context) {
        super(props);
        this.state = {
            formData: {}
        }
    }
    
    submitForm=(cb)=>{
        cb({ ...this.state.formData })
    } 
    setValue = (name, value) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value
            }
        })
    }
    
    render () {
        let renderChildren = [];
        this.props.children.map(item => {
            if (item.type?.name === 'FormItem') {
                const {
                    name
                } = item.props;
                let childrenTemp = React.cloneElement(
                    item,
                    {
                        key: name,
                        handleChange: this.setValue,
                        value: this.state.formData[name] ||  ''
                    },
                    item.props.children
                )
                renderChildren.push(childrenTemp);
            }
        })
        return <div className={formStyle.form}>
            {renderChildren}
        </div>;
    }
}
Form.displayName = 'form'