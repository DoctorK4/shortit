export default function handler(req, res) {
  let db = [
    {
      "id": "abc",
      "title": "위키피디아 Next.js",
      "url": "https://en.wikipedia.org/wiki/Next.js"
    },
    {
      "id": "def",
      "title": "코드잇 자유게시판",
      "url": "https://codeit.kr/community/general"
    },
    {
      "id": "ghi",
      "title": "코드잇 질문답변",
      "url": "https://www.codeit.kr/community/questions"
    }
  ];

  switch (req.method) {
    case 'GET':
      res.status(200).send(db);
      break;
    case 'POST':
      let newUrl = req.body;
      res.status(201).send(newUrl);
      break;
    default:
      res.status(404).send();
  }
}