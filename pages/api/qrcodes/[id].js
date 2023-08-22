export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).send(req.query.id);
      break;
    case 'PATCH':
      res.status(200).send({...req.body, id: req.query.id});
      break;
    case 'DELETE':
      res.status(204).send('DELETE');
    default:
      res.status(404).send();
  }
}