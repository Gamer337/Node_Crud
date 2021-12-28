import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUser = (req, res) => {

    res.send(users);

}

export const createUser = (req, res) => {
   
    const user = req.body;

    const userId = uuidv4();

    const userWithId = { ...user, id: userId};

    users.push(userWithId);
    
    res.send(`User with name ${user.firstName} is added`);
}

export const findUser = (req, res) => {
    
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with id ${id} is deleted`);
}

export const patchUser = (req, res) => {
    const { id } = req.params;

    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;

    if(lastName) user.lastName = lastName;

    if(age) user.age = age;

    res.send(`User with id ${id} has been partially updated`);
}

export const UpdateUser = (req, res) => {
    const { id } = req.params;

    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;

    res.send(`User with id ${id} has been updated`);   
}

