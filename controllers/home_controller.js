module.exports.home = function(req,res){
    return res.render('home')
}
module.exports.form = function(req,res){
    return res.render('form')
}

module.exports.table = function(req,res){
    return res.render('table')
}

module.exports.login = function(req,res){
    return res.render('auth/login')
}