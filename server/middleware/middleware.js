module.exports = function(req, res, next) {
    console.log('checking to see if user is logged in, req.user: ', req.user)
    if (req.session.user) {
        res.status(200).send(req.session.user);
        console.log('the user is logged in.')
    } else {
        console.log('the user is not logged in.');
        res.status(401).send('Unauthorized. Don`t try again fool!');
    };
}