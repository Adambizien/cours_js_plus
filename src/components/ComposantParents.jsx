import React, { useState } from 'react'

export default function ComposantParents() {
    const [isTermAccepted, setIsTermAccepted] = useState(false);

  return (
    <form>
        <CGUCheckbox isTermAccepted={isTermAccepted} setIsTermAccepted={setIsTermAccepted}/>
        <br />
        <button disabled={!isTermAccepted} > Envoyer le formulaire</button>
    </form>
  )
}

function CGUCheckbox({isTermAccepted, setIsTermAccepted}) {
    return (
        <label>
            <input type="checkbox" checked={isTermAccepted} onChange={(e) => setIsTermAccepted(e.target.checked)}/>
            J'accepte les CGU
        </label>
    )
}
