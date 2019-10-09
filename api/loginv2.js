const db = require('../db/Postgres').db();
// const escape = require('sql-template-strings')

module.exports = async (req, res) => {
    console.log('in login v2 ===========================')
let user = await db('users').select('email').where({email: 'taylorpasq@gmail.com'});
console.log('USER ===== ', user)
if (user.length == 0){
     res.status(400)
     return 'taylor'

} //TODO: IF user update count 
else {
    res = {
        status : 200,
        body   : JSON.stringify(user || {}),
        headers: {
            'Access-Control-Allow-Origin'     : '*',
            'Access-Control-Allow-Credentials': true,
            'Content-Type'                    : 'application/json',
        },
    };

    return 'taylor'
}

res.status(200).json({ profiles, pageCount, page })

//   let page = parseInt(req.query.page) || 1
//   const limit = parseInt(req.query.limit) || 9
//   if (page < 1) page = 1
//   const profiles = await db.query(escape`
//       SELECT *
//       FROM profiles
//       ORDER BY id
//       LIMIT ${(page - 1) * limit}, ${limit}
//     `)
//   const count = await db.query(escape`
//       SELECT COUNT(*)
//       AS profilesCount
//       FROM profiles
//     `)
//   const { profilesCount } = count[0]
//   const pageCount = Math.ceil(profilesCount / limit)
  //res.status(200).json({ profiles, pageCount, page })
  console.log('hello from login 2')
}