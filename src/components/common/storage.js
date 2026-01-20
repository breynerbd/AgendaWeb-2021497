const LOCAL_STORAGE_KEY_CONTACTS = 'agenda_lista';
const LOCAL_STORAGE_KEY_TASKS = 'tareas_lista';

function saveContactsToStorage(contactos) {
  localStorage.setItem(LOCAL_STORAGE_KEY_CONTACTS, JSON.stringify(contactos));
}

function getContactsFromStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CONTACTS)) || [];
}

function saveTasksToStorage(tareas) {
  localStorage.setItem(LOCAL_STORAGE_KEY_TASKS, JSON.stringify(tareas));
}

function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TASKS)) || [];
}

function deleteTaskById(id) {
  const tareas = getTasksFromStorage();
  const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
  saveTasksToStorage(nuevasTareas);
}

function deleteContactById(id) {
  const contactos = getContactsFromStorage();
  const nuevosContactos = contactos.filter(contacto => contacto.id !== id);
  saveContactsToStorage(nuevosContactos);
}

export {
  getContactsFromStorage,
  saveContactsToStorage,
  getTasksFromStorage,
  saveTasksToStorage,
  deleteTaskById,
  deleteContactById
};
