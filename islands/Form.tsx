import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

export const Form: FunctionComponent = () => {
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const submitHandler = (
        e: JSX.TargetedEvent<HTMLFormElement, Event>
    ) => {
        e.preventDefault()
        let errorMsg: string = "" ;
        if(email === "" || name === ""){
            errorMsg = "Invalid contact. A field is empyt, email is invalid, or the email is already in use"
        }
        if (errorMsg.length > 0){
            setError(errorMsg)
        }else{
            setError("");
            e.currentTarget.submit()
        }
    }

    return(
        <body>
            <form class = "agendaForm"
            action="/agendascr"
            method="POST"
            onSubmit={submitHandler}>
                <h2>Add New Contact</h2>
                <input 
                onFocus={(e) => setError("")}
                onInput={(e)=>setName(e.currentTarget.value)}
                type = "text"
                id="name"
                name="name"
                placeholder="Name"
                />
                <input
                onFocus={(e) => setError("")}
                onInput={(e)=>setEmail(e.currentTarget.value)}
                
                type = "email"
                id="email"
                name="email"
                placeholder="Email"
                />
                <div>
                <button type = "submit" disabled = {error !== ""}>Add contact</button>
                </div>
                <div>{error != "" && <p class = "rojo">{error}</p>}</div>
            </form>
        </body>
    )
}

export default Form;