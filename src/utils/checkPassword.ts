import bcryptjs from 'bcryptjs';

/**
 * Compares a plain text password with a hashed password.
 * Returns a promise that resolves `true` if the passwords match.
 *
 * @param password - The plain text password to check.
 * @param hashedPassword - The hashed password to compare against.
 * @returns True if the passwords match.
 */
export async function checkPassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  return await bcryptjs.compare(password, hashedPassword);
}
