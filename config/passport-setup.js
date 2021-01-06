const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20')
const {User}=require('../models/')

passport.serializeUser((user,done)=>{
    done(null,user.id)
})
passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    })
    .catch((err)=>console.log(err))

})



passport.use(new GoogleStrategy({
    //options for strategy ----obtain these from console.developer.google.com  (https://console.developers.google.com/apis/credentials?project=node-js-authorization)
    callbackURL:'http://localhost:3000/auth/google/redirect',
    clientID:"474163278785-87nc9jfvpcp9898oqke7lsimitlcq1rl.apps.googleusercontent.com",
    clientSecret:"JvoHEFjtRYPBA6nnJzMANS-x",
    passReqToCallback: true
},(req,accessToken,refreshToken,profile,done)=>{
    // console.log(`body ${Object.keys(req.body)}`)
    console.log(profile)
    console.log(profile._json.picture)
     User.findOne({googleid:profile.id})
    .then((user)=>{
        if (!user) {
            new User({firstname:profile.name.givenName,lastname:profile.name.familyName,googleid:profile.id,profilepic:profile._json.picture,role:"User"}).save()
            .then((usersaved)=>{
                console.log("usersaved")
                done(null,usersaved)
            })
            .catch((err)=>{console.log(err)})
            }
        else{
            done(null,user);
        }
    })
    .catch((err)=>{console.log(err)})

}))      


