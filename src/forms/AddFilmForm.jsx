import React, { useState } from "react";
import { nanoid } from "nanoid";
import './formStyle.css';
const { Formik, Form, Field } = require("formik");


export const Form1 = ({ setFilmData ,setAddFForm}) => {
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [age, setAge] = useState(0);
    const [description, setDescription] = useState("");

    const AddFilm = () => {
        setAddFForm(false)
        const film = {
            id: nanoid(),
            name: name,
            poster: poster,
            age: age,
            description: description,
            favorite: false,
        };

        setFilmData((prevData) => [...prevData, film]);
        localStorage.setItem(localStorage.length, JSON.stringify(film));
    };

    return (
        <div className="form-container">
            <h1>Add film</h1>
            <Formik>
                {() => (
                    <Form>
                        <div>
                            <span>Name:</span>
                            <Field
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <br />
                            <span>Poster:</span>
                            <Field
                                type="text"
                                value={poster}
                                onChange={(e) => setPoster(e.target.value)}
                            />
                        </div>
                        <div>
                            <br />
                            <span>Age:</span>
                            <Field
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div>
                            <br />
                            <span>Description:</span>
                            <Field
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <br />
                        <button type="button" onClick={AddFilm}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
