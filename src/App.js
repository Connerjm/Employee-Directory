import React, { useEffect, useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import getEmployees from "./utils/API";

export default function App()
{
    const [employees, setEmployees] = useState([]);

    useEffect(() =>
    {
        getEmployees(20)
            .then(res =>
                {
                    setEmployees(res.data.results);
                })
    //eslint-disable-next-line
    }, []);

    return (
        <div className="wrapper">
            <h1 className="title">Employee Directory</h1>
            {employees.map(employee => (
                <EmployeeCard
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    phone={employee.phone}
                    email={employee.email}
                    thumbnail={employee.picture.large}
                />
            ))}
        </div>
    );
}