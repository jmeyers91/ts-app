export default function fail(message: string, status: number = 400): never {
  const error = Object.assign(new Error(message), { status });
  throw error;
}
