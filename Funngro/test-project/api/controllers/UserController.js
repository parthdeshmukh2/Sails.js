module.exports = {
    getData: async(req, res)=>{
        const result = await userModel.find({});
        res.send(result);
    }
}