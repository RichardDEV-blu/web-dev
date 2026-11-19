import {useParams} from "react-router-dom";

function Contact() {
    const {name} = useParams<{ name: string }>()
    return (
        <>
            <h2>CONTACT</h2>
            <p>Name : {name}</p>
        </>
    )
}

export default Contact