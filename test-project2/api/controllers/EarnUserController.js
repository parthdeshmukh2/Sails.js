module.exports = {
  getData: async (req, res) => {
    let emailArr = [];

    const result = await EarnUserRegistration.find({}).limit(122590);
    for (let a = 0; a < result.length; a++) {
      emailArr.push(result[a].email);
    }
    console.log(emailArr.length);

    const uniqueEmail = new Set(emailArr);
    let arr = [...uniqueEmail];
    console.log(arr.length);

    for (let a = 0; a < result.length; a++) {
      if (emailArr[a] === arr[a]) continue;
      else {
        console.log(emailArr[a]);
        return;
      }
    }

    // res.send(emailArr);

       const result2 = await EarnUserRegistration.find({email:"zedkhan060@gmail.com"});
       res.send(result);
  },
};
