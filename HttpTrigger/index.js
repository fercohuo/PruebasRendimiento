module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function 1.');

    const name = (req.query.name || (req.body && req.body.name));
    context.log('JavaScript HTTP trigger function 2.');

    if(name)
    {
        context.res = {
            status: 200, /* Defaults to 200 */
            body: "Welcome, " + name
        };
    }else{
        context.res = {
            status: 400, 
            body: "Fernando C."
        };
    }

}