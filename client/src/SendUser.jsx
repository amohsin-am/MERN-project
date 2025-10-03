import React, { useState } from 'react';

function Send_user() {
    var [u_name, set_u_name] = useState("")
    var [u_age, set_u_age] = useState("")
    var [u_car, set_u_car] = useState("")
    var [u_color, set_u_color] = useState("")

    var on_submit = (event) => {
        event.preventDefault();

        var the_data = {
            "u_name": u_name,
            "u_age": u_age,
            "u_car": u_car,
            "u_color": u_color
        }

        fetch("http://localhost:8000/data_from_react", {
            method: "POST",
            body: JSON.stringify(the_data),
            headers: { "Content-Type": "application/json" }
        });
    }

    return (
        <>
            <h1>User Information Form</h1>
            <form onSubmit={on_submit}>
                <input type="text" placeholder="Name" onChange={(e) => set_u_name(e.target.value)} /><br /><br />
                <input type="number" placeholder="Age" onChange={(e) => set_u_age(e.target.value)} /><br /><br />
                <input type="text" placeholder="Car" onChange={(e) => set_u_car(e.target.value)} /><br /><br />
                <input type="text" placeholder="Favorite Color" onChange={(e) => set_u_color(e.target.value)} /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Send_user;
