const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 80
require("./db/conn");

const Register = require("./models/register");
const { send } = require("process");
const { urlencoded } = require("express");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials( partials_path);
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/index.html", (req, res) => {
    res.render("index")
})

// Creat a new user in database
app.post("/", async(req, res) => {
    try {
        // console.log(req.body.FirstName)
        // res.send(req.body.FirstName)

        const password = req.body.Pswd
        const CnfrmPassword = req.body.cnfrmPswd
        let pwdLen = password.length

    if((password == CnfrmPassword) && (pwdLen >= 7) ){
          const registerTraveler = new Register ({
            FirstName : req.body.FirstName,
              LastName : req.body.LastName,
              EmailAdd : req.body.EmailAdd,
              Pswd : password,
              cnfrmPswd : CnfrmPassword,
          })
        const registered  = await registerTraveler.save()
        res.status(200).render("index.hbs");

        }else{
            res.send("<h2>Please choose a more secure password. </br> </h2> 1. It should be longer than 7 characters </br>2. unique to you and difficult for others to guess. <br> 3. Your Confirm Password have to same as password </h2>")
        }
    } catch (error) {
        
        res.status(400).send("<h3>Enter Valid Email Id.</h3>");
        console.log("Invalid Email")
    }
})


// Login Check

app.post("/index.html", async(req, res) => {
   try {
       const Email = req.body.Email;
       const Password = req.body.Password

       const usermail = await Register.findOne({EmailAdd:Email})

       if (usermail.Pswd == Password) {
        res.status(200).render("index.hbs");
           
       }
       else{
           res.send("<h3>Invalid Login Details. </h3>")
       }
       

   } catch (error) 
   {
       res.status(400).send("<h3>Invalid Login Details. </h3>")
   }
})


app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})