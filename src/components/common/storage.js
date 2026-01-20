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

export {
  getContactsFromStorage,
  saveContactsToStorage,
  getTasksFromStorage,
  saveTasksToStorage
};
