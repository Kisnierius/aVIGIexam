import React, { useState, useEffect } from "react";
import "milligram";
import "../components/carDiv.css";

function Repair({ plateNo, id, create_time, repair_title, repair_comment, part_id, car_id, email }) {
    return (
        <div className="carDIV">
            <h2>{plateNo}</h2>
            <p>Repair ID: {id}</p>
            <p>{create_time}</p>
            <h1>{repair_title}</h1>
            <p>{repair_comment}</p>
            <p>Part ID: {part_id}</p>
            <p>Car ID: {car_id}</p>
            <p>{email}</p>
        </div>
    );
}

const Repairs = () => {
    const [repairs, setRepairs] = useState([]);

    const fetchRepairs = async () => {
        await fetch(`http://127.0.0.1:5000/repairs`)
            .then(response => response.json())
            .then(data => setRepairs(data));
        console.log(repairs)
    };



    useEffect(() => {
        fetchRepairs();
    }, []);

    return (
        <div className="flex flex-wrap">

            {repairs.length > 0
                ? repairs.map((repair) => (
                    <Repair plateNo={repair.plateNo} id={repair.id} create_time={repair.create_time} repair_title={repair.repair_title} repair_comment={repair.repair_comment} part_id={repair.part_id} car_id={repair.car_id} email={repair.email} />
                ))
                : "Loading..."}
        </div>
    );
};

export default Repairs;