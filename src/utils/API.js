import axios from "axios";

export default async function getEmployees(howMany)
{
    return await axios.get(`https://randomuser.me/api/?results=${howMany}&inc=name,email,phone,picture`);
}