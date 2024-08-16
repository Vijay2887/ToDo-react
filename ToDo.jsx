import { useState } from "react";


function ToDo() {

    const [value, setValue] = useState("");
    const [chores, setChores] = useState([]);
    



    function handleAddChore(event) {
        setChores([...chores, value]);
        setValue("");
    }

    function handleChange(event) {
        setValue(event.target.value);

    }


    return (
        <div className="outer">
            <div className="container">
                <div>
                    <input type="text" value={value} onChange={handleChange} className="text-field" />
                    <button onClick={handleAddChore} className="submit-button">Add</button>
                </div>
                <ol>
                    {
                        chores.map((chore, index) => <li key={index} className="text-field">{chore}</li>)
                    }
                </ol>
            </div>
        </div>
    );
}

export default ToDo