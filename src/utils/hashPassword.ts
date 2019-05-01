import bcryptjs from 'bcryptjs';

/**
 * Hashes and salts a password.
 * Returns a promise that resolves the hashed password.
 *
 * @param password - The password to hash.
 * @returns A promise that resolves the hashed password.
 */
export default async function hashPassword(password: string): Promise<string> {
  return await bcryptjs.hash(password, 10);
}
