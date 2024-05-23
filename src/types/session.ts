type TSession = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: string;
} | null;

export default TSession;

// email: 'martian@martian.test',
//   expiresAt: '2024-05-29T22:46:15.113Z',
//   iat: 1716417975,
//   exp: 1717022775
