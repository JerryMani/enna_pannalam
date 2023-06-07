const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const apiBaseUrl = "http://localhost:3000";

const app = express();
app.use(express.json());
const upload = multer({ dest: 'uploads/' });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: apiBaseUrl, credentials: true }));


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "n_matrimony",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL database!");
});


app.post("/api/register", (req, res) => {
  const { profile, looking, mobile, password, conform } = req.body;

  const selectQuery = "SELECT * FROM register WHERE  mobile = ?";
  db.query(selectQuery, [mobile], (err, results, fields) => {
    if (err) {
      res.json({ error: "Internal Server Error" });
    } else if (results.length > 0) {
      res.json({ error: "User already exists" });
    } else if (password !== conform) {
      res.json({ error: "Password doesn't match" });
    } else if (password === conform) {
      const sql =
        "INSERT INTO register (`profile`,`looking`, `mobile`, `password`,`conform_password`) VALUES (?, ?, ?, ?, ?)";
      db.query(
        sql,
        [profile, looking, mobile, password, conform],
        (err, result) => {
          if (err) {
            throw err;
            res.json({ error: "Internal Server Error" });
          } else {
            // res.json({ auth: true, user: mobile, message: "User registered successfully!" });
            const sqls = "SELECT * FROM register WHERE mobile = ?";
            db.query(sqls, [mobile], (err, data) => {
              if (err) {
                throw err;
              } else if (data.length > 0) {
                const userMob = data[0];
                res.json({
                  auth: true,
                  userId: userMob.id,
                  userMob: userMob.mobile,
                  message: "User registered successfully!",
                });
              }
            });
          }
        }
      );
    }
  });
});

app.post("api/Search",(req,res)=>{
  console.log("entered search backend");
  if(req.body.Test === 'test'){
    res.json({message: "success"});
  }
  else{
    res.json({error: "error"});
  }
})


app.post("/api/basic-info", (req, res) => {
  const { first, last, dob, gender, marital, tongue, email, user, alt } =
    req.body;

  const sql =
    "INSERT INTO basic_info (user_id,first_name,last_name,dob,gender,marital_status,mother_tongue,email,mobile_number,altermobile_number) VALUES (?, ?, ?, ?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      user.userId,
      first,
      last,
      dob,
      gender,
      marital,
      tongue,
      email,
      user.userMob,
      alt,
    ],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        const sqls = "SELECT * FROM basic_info WHERE user_id = ?";
        db.query(sqls, [user.userId], (err, data) => {
          if (err) {
            throw err;
          } else if (data.length > 0) {
            const userDetails = data[0];
            res.json({
              auth: true,
              userBasic: userDetails,
              message: "User Basic Info registered successfully!",
            });
          }
        });
      }
    }
  );
});



app.post("/api/Contact", (req, res) => {
  const {
    user,
    address,
    address1,
    city,
    state,
    country,
    address2,
    address3,
    city1,
    state1,
    country1,
  } = req.body;

  const sql =
    "INSERT INTO contact_details (`user_id`,`address`,`address1`,`city`,`state`,`country`,`address2`,`address3`,`city1`,`state1`,`country1`) VALUES (?, ?, ?, ?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      user.userId,
      address,
      address1,
      city,
      state,
      country,
      address2,
      address3,
      city1,
      state1,
      country1,
    ],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        const sqls = "SELECT * FROM contact_details WHERE user_id = ?";
        db.query(sqls, [user.userId], (err, data) => {
          if (err) {
            throw err;
          } else if (data.length > 0) {
            const userCont = data[0];
            res.json({
              auth: true,
              userCont,
              message: "User Contact Info registered successfully!",
            });
          }
        });
      }
    }
  );
});

app.post("/api/FamilyDetails", (req, res) => {
  const {
    user,
    father,
    fcaste,
    fkulam,
    mother,
    mcaste,
    mkulam,
    fstatus,
    ftype,
    fvalues,
    sisters,
    brothers,
    msisters,
    mbrothers,
    parentsno,
  } = req.body;
  console.log(req.body);
  const sql =
    "INSERT INTO family_details (`user_id`,`father_name`,	`father_caste`,	`father_kulam`,	`mother_name`,	`mother_caste`,	`mother_kulam`,	`family_status`,	`family_type`,	`family_values`,	`no_of_sisters`,	`no_of_brothers`,	`married_sisters`,	`married_brothers`,`parents_number`) VALUES (?, ?,?, ?, ?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      user.userId,
      father,
      fcaste,
      fkulam,
      mother,
      mcaste,
      mkulam,
      fstatus,
      ftype,
      fvalues,
      sisters,
      brothers,
      msisters,
      mbrothers,
      parentsno,
    ],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        const sqls = "SELECT * FROM family_details WHERE user_id = ?";
        db.query(sqls, [user.userId], (err, data) => {
          if (err) {
            throw err;
          } else if (data.length > 0) {
            const userFamilyDetails = data[0];
            res.json({
              auth: true,
              userFamilyDetails,
              message: "User Family Info registered successfully!",
            });
          }
        });
      }
    }
  );
});

app.post("/api/ReligiousInformation", (req, res) => {
  const { user, religion, caste, Kulam, star, raasi, chevvai, naga } = req.body;
  console.log(req.body);
  const sql =
    "INSERT INTO religious_details (`user_id`,`religion`,	`caste`	,`kulam`,	`star`,	`raasi`	,`chevvai_dosham`,	`naga_dosham`	) VALUES (?, ?,?, ?, ?,?,?,?)";
  db.query(
    sql,
    [user.userId, religion, caste, Kulam, star, raasi, chevvai, naga],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        const sqls = "SELECT * FROM religious_details WHERE user_id = ?";
        db.query(sqls, [user.userId], (err, data) => {
          if (err) {
            throw err;
          } else if (data.length > 0) {
            const religiousDetails = data[0];
            res.json({
              auth: true,
              religiousDetails,
              message: "User Religious Info registered successfully!",
            });
          }
        });
      }
    }
  );
});

app.post("/api/HabitDetails", (req, res) => {
  const { user,home, land, plat, food, smoking, drinking } = req.body;
  console.log(req.body);
  const sql =
    "INSERT INTO habit_details (`user_id`,`home_details`,	`agri_land`,	`plat`,	`food_habits`	,`smoking_habits`,	`drinking_habits`) VALUES (?,?, ?, ?, ?,?,?)";
  db.query(sql, [user.userId,home, land, plat, food, smoking, drinking], (err, result) => {
    if (err) {
      throw err;
    } else {
      const sqls = "SELECT * FROM habit_details WHERE user_id = ?";
      db.query(sqls, [user.userId], (err, data) => {
        if (err) {
          throw err;
        } else if (data.length > 0) {
          const habitDetails = data[0];
          res.json({
            auth: true,
            habitDetails,
            message: "User Habit Info registered successfully!",
          });
        }
      });
    }
  });
});

app.post("/api/PersonalDetails", (req, res) => {
  const {
    user,
    education,
    emptype,
    occupation,
    income,
    height,
    weight,
    bodytype,
    complexion,
    physical,
  } = req.body;
  const sql =
  "INSERT INTO personal_details (`user_id`,`education`,`employment_type`,`occupation`,`income`,`height`,`weight`,`body_type`,`complexion`,`physical`) VALUES (?,?,?,?,?,?,?,?,?,?)";

  db.query(
    sql,
    [
      user.userId,
      education,
      emptype,
      occupation,
      income,
      height,
      weight,
      bodytype,
      complexion,
      physical,
    ],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        const sqls = "SELECT * FROM personal_details WHERE user_id = ?";
        db.query(sqls, [user.userId], (err, data) => {
          if (err) {
            throw err;
          } else if (data.length > 0) {
            const personalDetails = data[0];
            res.json({
              auth: true,
              personalDetails,
              message: "User Personal Info registered successfully!",
            });
          }
        });
      }
    }
  );
});

app.post("/api/PartnerPreferenceDetails", (req, res) => {
  const {
    user,
    pmarital,
    peducation,
    employ,
    mtongue,
    occupa,
    monincome,
    preligion,
    pcaste,
    pkulam,
    pheight,
    pweight,
    pbodytype,
    pcomplexion,
    pphysical,
  } = req.body;
  console.log(req.body);
  const sql =
    "INSERT INTO partner_details(`user_id`,`marital_status` ,	`mother_tongue`,	`highest_education`,	`employment_type`,	`occupation`,	`monthly_income`,	`religion`	,`caste`,	`kulam`	,`height`,	`weight`, `body_type`,	`complexion`,	`physical_status`	) VALUES (?, ?, ?,?, ?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      user.userId,
      pmarital,
      peducation,
      employ,
      mtongue,
      occupa,
      monincome,
      preligion,
      pcaste,
      pkulam,
      pheight,
      pweight,
      pbodytype,
      pcomplexion,
      pphysical,
    ],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        const sqls = "SELECT * FROM partner_details WHERE user_id = ?";
        db.query(sqls, [user.userId], (err, data) => {
          if (err) {
            throw err;
          } else if (data.length > 0) {
            const partnerDetails = data[0];
            res.json({
              auth: true,
              partnerDetails,
              message: "User PartnerDetails Info registered successfully!",
            });
          }
        });
      }
    }
  );
});

app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // Store the image filename in the database
  const { originalname, filename } = req.file;
  const imageUrl = `uploads/${filename}`;

  db.query(
    'INSERT INTO images (originalname, filename, imageUrl) VALUES (?, ?, ?)',
    [originalname, filename, imageUrl],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to upload image' });
      }

      return res.json({ message: 'Image uploaded successfully' });
    }
  );
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
