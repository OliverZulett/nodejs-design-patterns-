export function createUser(name) {
  const privateProperties = {};

  const user = {
    setName(name) {
      if (!name) {
        throw new Error("El usuario debe tener un nombre");
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
