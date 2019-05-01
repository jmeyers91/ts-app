/**
 * Throw an error with an optional http status code.
 *
 * @param message - The error message.
 * @param status - The HTTP status code.
 */
export default function fail(message: string, status: number = 400): never {
  const error = Object.assign(new Error(message), { status });
  throw error;
}
