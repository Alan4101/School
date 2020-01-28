(function(){
    const mongoose = require('mongoose');
    const subject = mongoose.model('Subject');

    exports.createSubject = (data, callback) => {
      subject.create(data).then(
          (response) => {
            callback(null, response);
          },
          (error) => {
              callback(error, null);
          }
          )
    };

    exports.findSubject = (query, callback) => {
        subject.findOne(query, callback);
    };

    exports.updateSubjectById = (id, data, callback) => {
        subject.findByIdAndUpdate({
            _id: id
        }, data, (err, response) => {
            callback(err, response);
        });
    };

    exports.updateSubject = (query, data, options, callback) => {
        subject.findOneAndUpdate(query, data, options, (err, response) => {
            callback(err, response);
        });
    };

    exports.deleteSubject = (query, callback) => {
        subject.deleteOne(query, callback);
    }

})();