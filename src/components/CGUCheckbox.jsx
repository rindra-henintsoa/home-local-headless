import React from "react";

const CGUCheckbox  = ({checked, onCheck}) => {
    return <div>
        <label htmlFor="">
            <input type="checkbox" name="rgpd" value={checked} onChange={(e) => {onCheck(e.target.checked)} } />
            Accepter les conditions d'utilsation
        </label>
    </div>
}

export default CGUCheckbox;