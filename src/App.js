//Imports
import React, { Fragment, useEffect, useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import getEmployees from "./utils/API";

//Defining funcional component.
export default function App()
{
    //Employee array state.
    const [employees, setEmployees] = useState([]);

    //Use effect on component mount.
    useEffect(() =>
    {
        getEmployees(20)//Get 20 employees for now.
            .then(res => { setEmployees(res.data.results); })
            .catch(err => { console.error(err); });
    //eslint-disable-next-line
    }, []);

    //Sort option to sort by employee name.
    function sortByName()//TODO: Add choice between ascending and descening.
    {
        setEmployees([...employees.sort((e1, e2) => e1.name.first.localeCompare(e2.name.first))]);
    }

    //Filter option to filter by employee title.
    function filterByTitle(title)//TODO: Change to use title.
    {
        setEmployees(employees.filter(employee => employee.name.title === "Mr"));
    }

    //Return to render the component.
    return (
        <Fragment>
            <h1 className="title">Employee Directory</h1>
            <button className="btn btn-primary" onClick={sortByName}>Sort by Name</button>
            <button className="btn btn-primary" onClick={filterByTitle}>Filter by Gender</button>
            <div className="wrapper">
                {employees.map((employee, index) => (
                    <EmployeeCard
                        id={index}
                        key={index}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        phone={employee.phone}
                        email={employee.email}
                        thumbnail={employee.picture.large}
                    />
                ))}
            </div>
        </Fragment>
    );
}