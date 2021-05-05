//Imports
import axios from "axios";

//Export single api call function.
export default function getEmployees(howMany)
{
    return axios.get(`https://randomuser.me/api/?results=${howMany}&inc=name,email,phone,picture&nat=us`);
}