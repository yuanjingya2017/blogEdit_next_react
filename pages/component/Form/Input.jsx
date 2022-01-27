import formStyle from './form.module.scss';

export const Input = ({onChange, value, type = 'text', name, id = ''}) => {
    return type == 'text' ? <input className={formStyle.item_input} value={value} onChange={(e) => {
        onChange && onChange(e.target.value)
    }} /> : <textarea id={id} className={formStyle.item_input} name={name} id={name} cols="30" rows="10" value={value} onChange={(e) => {
        onChange && onChange(e.target.value)
    }}></textarea>
}
Input.displayName = 'input';