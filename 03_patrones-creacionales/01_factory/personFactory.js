function createUser(name) {
  const privateProperties = {};

  const user = {
    setName(name) {
      if (!name) {
        throw new Error("El usuario debe tener nombre");
      }

      privateProperties.name = name;
    },
    getName() {
      return privateProperties.name;
    },
  };

  user.setName(name);

  return user;
}

const newUser = createUser("user_1");
console.log(newUser.getName());
newUser.setName("new name");
console.log(newUser.getName());
try {
  const userWithoutName = createUser();
} catch (error) {
  console.error(error.message);
}
