import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) => {
  return bcrypt.hashSync(password, 10);
};

export const comparePassword = async (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};