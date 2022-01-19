export const Input = ({onChange, value}) => {
    return <input type="text" value={value} onChange={(e) => {
        onChange && onChange(e.target.value)
    }} />
}
Input.displayName = 'input';