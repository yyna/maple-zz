import { getUser } from '../../lib/api';

export default async function userHandler(req, res) {
  const {
    query: { user },
    method,
  } = req;
  const point = await getUser(user);

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ user, point });
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
