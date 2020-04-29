import React from "react";
import TableRow from "../tableRow/tableRow";

const tableBody = (props) => {
    return (
    <tbody>
        {
            props.empListFilter.map(employee => (
                <TableRow
                key={employee.id}
                id={employee.id}
                photo={employee.photo}
                name={employee.name}
                />
            ))
        }
    </tbody>
    )
}

export default tableBody;