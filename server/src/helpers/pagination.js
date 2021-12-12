/*exports.paginate => {
    return (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        return {page,limit,startIndex,endIndex}
    };
}*/
