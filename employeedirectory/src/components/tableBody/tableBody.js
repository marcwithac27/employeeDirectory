import React from "react";
import tableRow from "../tableRow";

const tableBody = (props) => {
    return (
    <tbody>
        {
            props.empListFilter.map(employee => (
                <tableRow
                key={employee.id}
                id={employee.id}
                photo={employee.photo}
                email={employee.email}
                />
            ))
        }
    </tbody>
    )
}

export default tableBody;