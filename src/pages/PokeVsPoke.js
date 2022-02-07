import { Link } from "react-router-dom";

const PokeVsPoke = () => {
    return (
        <>
            <h1>Shows your pokemon vs. Computer Pokemon</h1>
            <Link to={`/battle`}>
                <button>FIGHT!</button>
            </Link>
        </>
    )
}

export default PokeVsPoke;