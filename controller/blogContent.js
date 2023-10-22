const blogContent = (req, res) => {

    const conn = req.conn
    const title = req.query.q
    console.log(title)

    const query = `SELECT * FROM Blogs WHERE blogTitle = "${title}"`;

    conn.query(query, (error, result) => {

        if (error) console.log(error.message)

        else {

            const response = result[0]
            res.render('blog', { response })
        }
    })

}

const blogContentUsingId = (req, res) => {

    const id = req.query.id
    const conn = req.conn

    const query = `SELECT * FROM Blogs WHERE Id = "${id}"`

    conn.query(query, (error, result) => {

        if (error) res.status(500).json({ message: 'Internal Server Error' })
        else {

            res.status(200).send({ result: result[0] })
        
        }
    })

}

module.exports = { blogContent, blogContentUsingId }