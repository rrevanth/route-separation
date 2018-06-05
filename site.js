exports.index = function(req, res){
  res.render('index', { title: 'Route Separation Example' });
};

exports.index2 = function(req, res){
  res.render('index2', { title: 'Route Separation Example Index 2' });
};
