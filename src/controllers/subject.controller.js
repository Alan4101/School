const Subject = require('../helpers/subject');

exports.create = (req, res, next) => {

  const body = new Subject(req.body);

  if(!body.name){
      res.status(400).send('Subject is missing');
      return;
  }


};


