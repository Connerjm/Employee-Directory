//Imports
import React, { Fragment, useEffect, useState } from "react";
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import EmployeeCard from "./components/EmployeeCard";
import getEmployees from "./utils/API";

//Defining funcional component.
export default function App()
{
    //Original employee array.
    const [original, setOriginal] = useState([]);
    //Employee array state.
    const [employees, setEmployees] = useState([]);

    //Use effect on component mount.
    useEffect(() =>
    {
        //Get random employees into an array.
        getEmployees(20)//Get 20 employees for now.
            .then(res => { setOriginal(res.data.results); setEmployees(res.data.results); console.log(res.data.results); })
            .catch(err => { console.error(err); });
    }, []);

    //Sort option to sort by employee name.
    function sortByName(direction)//TODO: Add choice between ascending and descening.
    {
        if (direction === 1)
            setEmployees([...employees.sort((e1, e2) => e1.name.first.localeCompare(e2.name.first))]);
        else
            setEmployees([...employees.sort((e1, e2) => e2.name.first.localeCompare(e1.name.first))]);
    }

    //Filter option to filter by employee title.
    function filterByTitle(title)//TODO: Change to use title.
    {
        setEmployees(original.filter(employee => employee.name.title === title));
    }

    //Return to the original array.
    function reset()
    {
        setEmployees(original);
    }

    //Return to render the component.
    return (
        <Fragment>
            <h1 className="title">Employee Directory</h1>
            <div className="buttons">
                <DropdownButton title="Sort by">
                    <Dropdown.Item onClick={() => sortByName(1)}>Name Ascending</Dropdown.Item>
                    <Dropdown.Item onClick={() => sortByName(-1)}>Name Descending</Dropdown.Item>
                </DropdownButton>
                <DropdownButton title="Filter by">
                    <Dropdown.Item onClick={() => filterByTitle("Mr")}>Title: Mr</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterByTitle("Ms")}>Title: Ms</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterByTitle("Mrs")}>Title: Mrs</Dropdown.Item>
                    <Dropdown.Item onClick={() => filterByTitle("Miss")}>Title: Miss</Dropdown.Item>
                </DropdownButton>
                <Button onClick={reset}>Reset</Button>
            </div>
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