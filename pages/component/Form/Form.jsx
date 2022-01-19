import { Fragment } from "react/cjs/react.production.min"
import * as React from 'react'

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
                console.log(childrenTemp, '------childrenTemp')
                renderChildren.push(childrenTemp);
            }
        })
        return renderChildren;
    }
}
Form.displayName = 'form'