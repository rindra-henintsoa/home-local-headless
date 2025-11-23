    import React, { useState } from "react";
    import CGUCheckbox from "./CGUCheckbox";

    const ChildParent = () => {
        const [isTermAccepted, setIsTermAccepted] = useState(false);

        return  <form action="">
            <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
            <button disabled={!isTermAccepted}>Envoyer</button>
        </form>
    }

    export default ChildParent;