// admin panel
const adminPanel = (req, res) => {

    res.render('admin')
}

// Insert data
const insertData = (req, res) => {

    try {

        const { blogTitle, blogContent, ImgURL, smallPara} = req.body
        console.log(req.body)

        const connection = req.conn
     
    
        const myQuery = 'INSERT INTO Blogs (blogTitle, blogContent, ImgURL, smallPara) VALUES (?, ?, ?, ?)';


        connection.query(myQuery, [blogTitle, blogContent, ImgURL, smallPara], (error, result) => {

            if (error) console.log(error.message)
            else {

                res.status(200).json({ message: "inserted" })
                console.log('inserted', result)
            }
        })
    } catch (error) {

        console.log(error.message)
    }
}

// get one blog
const getOne = (req, res) => {

    const { blogTitle } = req.body

    const connection = req.conn

    const quey = `SELECT * FROM Blogs WHERE blogTitle = "${blogTitle}"`

    connection.query(quey, (err, result) => {

        if (err) console.log(err.message)
        else {

            console.log(result)
            res.status(200).json({ result: result[0] })
        }
    })



}

// update

// TODO: Implement delete

module.exports = {
    adminPanel,
    insertData,
    getOne
}