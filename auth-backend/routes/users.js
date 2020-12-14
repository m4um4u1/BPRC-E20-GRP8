const express = require('express')
const User = require('../models/User')
const router = express.Router()
const bccrypt = require('bcryptjs')
const passport = require('passport')

// user model
const user = require('../models/User')

// Login Page
router.get('/login', (req, res) => res.render('login'))

// Register Page
router.get('/register', (req, res) => res.render('register'))

// Register Handle
router.post('/register', (req, res) =>{
    const {Employeenumber, password, password2 } = req.body
    let errors = []

    // check required fields
    if(!Employeenumber || !password || !password2 ){
        errors.push({ msg: 'Please fill in all fields'})
    }

    //check if passwords match
    if(password !==password2){
        errors.push({ msg: 'Passwords do not match'})
    }

    // check pass lenght
    if(password.length < 6){
        errors.push({msg: 'Password must be atleast 6 characters'})
    }

    if(errors.length > 0){
        res.render('register', {
            errors,
            Employeenumber,
            password,
            password2
        })
    } else {
        // validation passed
        User.findOne({Employeenumber: Employeenumber})
        .then(user =>{
            if(user){
                // User exsitst
                errors.push({msg: 'Employeenumber is already registered'})
                res.render('register', {
                    errors,
                    Employeenumber,
                    password,
                    password2
                })
            } else {
                const newUser = new User({
                    Employeenumber,
                    password
                })
                // Hash Password
                bccrypt.genSalt(10, (err,salt) => {
                    bccrypt.hash(newUser.password, salt, (err, hash) =>
                    {
                        if (err) throw err;
                        newUser.password = hash
                        newUser.save()
                          .then(user => {
                              req.flash('success_msg', 'You are now registered')
                            res.redirect('/users/login');
                          })
                          .catch(err => console.log(err));
                      })
                    })
                  }
                })
              }
            })

// Login Handle
router.post('/login', (req, res, next) =>{
    passport.authenticate('local',{
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next)

})

// Logout Handle
router.get('/logout', (req, res) =>{
    req.logOut()
    req.flash('success_msg', 'You are now logged out')
    res.redirect('/users/login')
})


module.exports = router