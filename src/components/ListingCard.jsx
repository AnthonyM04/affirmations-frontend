export default function ListingCard( {affirms, affirmation} ) {

console.log( {affirmation} )

    return(
        <div className="card">
            <details>
            <p>{affirms.affirmation}</p>
            </details>
        </div>
    )
}