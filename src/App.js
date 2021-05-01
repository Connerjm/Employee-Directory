import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import getEmployees from "./utils/API";

class App extends Component
{
    state = { employees: null };

    async setEmployees()
    {
        console.log((await getEmployees(20)).data.results);
        //this.setState({ employees: (await getEmployees(20)).data.results });
    }

    render()
    {
        this.setEmployees();
        return (
            <div className="wrapper">
                <h1 className="title">Employee Directory</h1>
                {this.state.employees.map(employee => (
                    <EmployeeCard
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        phone={employee.phone}
                        email={employee.email}
                        thumbnail={employee.picture.thumbnail}
                    />
                ))}
            </div>
    );}
}

export default App;