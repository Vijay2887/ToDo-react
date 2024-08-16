import { useState } from "react";


function ToDo() {

    const [value, setValue] = useState("");
    const [chores, setChores] = useState([]);
    



    function handleAddChore(event) {
        setChores(c => [...c, value]);
        setValue("");
    }

    function handleChange(event) {
        setValue(event.target.value);

    }

    function handleRemove(index){
        setChores(c => c.filter((_, i) => i != index));
    }


    return (
        <div className="outer">
            <div className="container">
                <div>
                    <input type="text" value={value} onChange={handleChange} className="text-field" />
                    <button onClick={handleAddChore} className="submit-button">Add</button>
                </div>
                <div className="message">*Tap to remove any completed chores</div>
                <ol>
                    {
                        chores.map((chore, index) => <li key={index} className="text-field" onClick={() => {
                            handleRemove(index);
                        }}>{chore}</li>)
                    }
                </ol>
            </div>
        </div>
    );
}

export default ToDo
