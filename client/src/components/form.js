import { useState } from "react";

const Form = (props) => {
    const [person, setPerson] = useState({
        firstname: "",
        lastname: "",
        email: "",
        affiliation: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const firstname = event.target.value;
        setPerson((person) => ({ ...person, firstname }));
    }

    const handleLastnameChange = (event) => {
        const lastname = event.target.value;
        setPerson((person) => ({ ...person, lastname }));

    }

    const handleEmailChange = (event) => {
        const email = event.target.value;
        setPerson((person) => ({ ...person, email }));

    }

    const handleAffiliationChange = (event) => {
        const affiliation = event.target.value;
        setPerson((person) => ({ ...person, affiliation }));

    }

    //A function to handle the post request
    // const postStudent = (newStudent) => {
    //     return fetch('http://localhost:5000/api/students', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'}, 
    //     body: JSON.stringify(newStudent)
    //   }).then((response) => {
    //       return response.json()
    //   }).then((data) => {
    //     console.log("From the post ", data);
    //     props.addStudent(data);

    // });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPerson(person);
        props.addPerson(person);

    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>First Name</label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="First Name"
                    required
                    value={person.firstname}
                    onChange={handleNameChange}

                />
                <label>Last Name</label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Last Name"
                    required
                    value={person.lastname}
                    onChange={handleLastnameChange}
                />
                <label>Email</label>
                <input
                    type="text"
                    id="add-user-email"
                    placeholder="Email"
                    required
                    value={person.email}
                    onChange={handleEmailChange}
                />

                <label>Affiliation</label>
                <input
                    type="text"
                    id="add-user-affiliation"
                    placeholder="Political affiliation"
                    required
                    value={person.a}
                    onChange={handleAffiliationChange}
                />
            </fieldset>
            <button className="button" type="submit">Add</button>
        </form>
    );
};

export default Form;