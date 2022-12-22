const statusUpdates = new Map();

export const statusUpdateService = {
  postUpdate(status) {
    const id = Math.floor(Math.random() * 1000000);
    statusUpdates.set(id, status);
    console.log(`Status posteado exitosamente; ${status}`);
    return id;
  },
  destroyUpdate(id) {
    statusUpdates.delete(id);
    console.log(`Status removido exitosamente; ${id}`);
  },
};
