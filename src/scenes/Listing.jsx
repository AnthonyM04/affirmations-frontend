import { useState, useEffect } from "react";
import ListingCard from "../components/ListingCard";

export default function Listing() {
    const [affirms, setAffirms] = useState([0]);

    useEffect( () => {
         fetch()
        .then( res => res.json())
        .then( setAffirms)
        .catch( err => console.error(err) )
    },[])

    console.log({affirms})

    return(
        <article>
            <div>
                <p>Not working</p>
                <h2>Welcome</h2>
                <section className="affirmation-container"/>
                { affirms.map( (element) => {
                    return (<ListingCard key={element.affirms} affirms={element}/>
                )})}
            </div>
        </article>
    )
}