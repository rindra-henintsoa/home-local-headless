export function Checkbox({checked, onChange, lable}) {
    return <div>
        <input 
            type="checkbox"
            className="form-check-input"
            id="form-check-input"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor="form-check-input">{lable}</label>
    </div>
}