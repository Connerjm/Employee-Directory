import React from "react";
import EmployeeCard from "./components/EmployeeCard";

function App()
{
    return (
        <div className="wrapper">
            <h1 className="title">Employee Directory</h1>
            <EmployeeCard
                firstName="Conner"
                lastName="Martin"
                phone="253-389-1831"
                email="skatercraze@gmail.com"
                thumbnail=""
            />
        </div>
    );
}

export default App;