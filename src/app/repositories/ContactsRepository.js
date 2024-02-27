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

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.email === email),
      );
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id: v4(),
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }
}

module.exports = new ContactsRepository();
