const userModel =  require('../models/user');

module.exports.login = function(req,res){
    return res.render('auth/login')
}

module.exports.register = function(req,res){
    return res.render('auth/register')
}


module.exports.home = function(req,res){
    return res.render('home')
}
module.exports.form = function(req,res){
    return res.render('form')
}

module.exports.table = function(req,res){

    userModel.find({},function(err,data){
        if(err){
            console.log("record not fetch")
        }
        res.render('table',{
            user_data : data,
        })
    })
}

module.exports.addData = function(req,res){
    userModel.create({
        name : req.body.name,
        mobile : req.body.mobile,
        email : req.body.email,
        password : req.body.password

    },function(err,newUser){
        if(err){
            console.log("somthing went wrong in data user create data");
            return;
        }
        return res.redirect('login');
    })
}
module.exports.loginUser = function(req,res){
    userModel.findOne({email : req.body.email},function(err,userdata){
        if(err){
            console.log("user not found");
            return;
        }
        else{
            if(userdata){
                if(userdata.password == req.body.password){
                    let getalldataofUser = userdata
                    console.log(getalldataofUser);
                    res.cookie('user',getalldataofUser)
                    return res.redirect('/dashboard');
                }
                else{
                    return res.redirect('back');
                }  
            }
            else{
                console.log("data not fond");
                return res.redirect('back');
            }
            
        }
    })
} 

module.exports.logout = function(req,res){
    res.clearCookie("user");
    return res.redirect('/login');
}



