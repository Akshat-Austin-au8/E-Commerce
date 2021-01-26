import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'john dow',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'willy frenzy',
    email: 'willy@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
