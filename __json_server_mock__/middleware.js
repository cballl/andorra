module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login') {
        console.log(req.body)
        if (req.body.username === 'abc' && req.body.password === '123456') {
            return res.status(200).json({
                user: {
                    token: "123456789"
                }
            })
        } else {
            return res.status(400).json({
                log: "登录失败"
            })
        }
    }
    next()
}