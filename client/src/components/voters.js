import { useState, useEffect } from "react";
import Form from "./form";

function Voters() {

    const [voters, setVoters] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/voters")
            .then((response) => response.json())
            .then(voters => {
                setVoters(voters);
            }

            )

    }, []);

    const addPerson = (person) => {
        //console.log(newStudent);
        //postStudent(newStudent);
        setVoters((voters) => [...voters, person]);
    }


    return (
        <div className="voters">
            <h2> List of Voters </h2>
            <ul>
                {voters.map(person =>
                    <li key={person.id}> {person.firstname} {person.lastname} {person.email} {person.affiliation}</li>)}
            </ul>
            <Form addPerson={addPerson} />
        </div>
    );
}

export default Voters;