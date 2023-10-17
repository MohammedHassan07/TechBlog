// home --> contains blogs/cards
const home = (req, res) => {

    const connection = req.conn
    const query = `SELECT * FROM Blogs`

    connection.query(query, (error, result) => {

        if (error) console.log(error.message)

        else {


            console.log(result)
            res.render('home', { result })
        }
    })
}

// about
const about = (req, res) => {

    res.render('about')
}

// contact
const contact = (req, res) => {
    
    res.render('contact')
}

// send email 
const sendEmail = (req, res) => {

    const {name, email, message} = req.body
}

module.exports = {
    home,
    about,
    contact, sendEmail
}