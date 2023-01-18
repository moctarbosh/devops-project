const authorList = require('../data/authors.json');

const authors = {
  getAll: (req, res) => {
    if (authorList) {
      return res.status(200).send(authorList);
    } else {
      return res.sendStatus(404);
    }
  },

  getById: (req, res) => {
    const author = authorList.filter(a => a.Id == req.params.id);
    if (author && author.length) {
      return res.status(200).send(author);
    } else {
      return res.sendStatus(404);
    }
  }
};

module.exports = authors;
