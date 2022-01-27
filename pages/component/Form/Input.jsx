import formStyle from './form.module.scss';

export const Input = ({onChange, value, type = 'text', name}) => {
    return type == 'text' ? <input className={formStyle.item_input} value={value} onChange={(e) => {
        onChange && onChange(e.target.value)
    }} /> : <textarea className={formStyle.item_input} name={name} id={name} cols="30" rows="10" value={value} onChange={(e) => {
        onChange && onChange(e.target.value)
    }}></textarea>
}
Input.displayName = 'input';