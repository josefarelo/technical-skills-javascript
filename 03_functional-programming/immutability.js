const incrementAge = (user) => {
    return { ...user, age: user.age + 1 };
};

const user = { name: "Ana", age: 25 };
const updatedUser = incrementAge(user);