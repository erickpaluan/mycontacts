const { v4 } = require('uuid');

let contacts = [
  {
    // uuid -> Universal Unique ID.
    id: v4(),
    name: 'Erick',
    email: 'erick@mail.com',
    phone: '123123123',
    category_id: v4(),
  },
  {
    // uuid -> Universal Unique ID.
    id: v4(),
    name: 'Sophia',
    email: 'sophia@mail.com',
    phone: '4564645645',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
