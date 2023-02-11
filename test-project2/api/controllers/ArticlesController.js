/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  viewArticle: async (req, res) => {
    const { userId } = req.user;
    let articles = await Articles.find({ user: userId }).populate("user");
    res.send(articles);
  },

  postArticle: async (req, res) => {
    let { title, body } = req.body;
    const { userId } = req.user;
    // console.log(title, body);
    console.log(userId);
    let articles = await Articles.create({
      title: title,
      body: body,
      user: userId,
    }).fetch();
    res.send({ messege: "uploaded Successfully", articles });
  },

  editArticle: async (req, res) => {
    let { id } = req.params;
    let { title, body } = req.body;
    const { userId } = req.user;
    const article = await Articles.findOne({ id: id });
    // console.log(id, body);
    if (article.userId === userId) {
      let editedArticle = await Articles.updateOne({ id: id }).set(req.body);
      res.send({ messege: "Updated Successfully", editedArticle });
    } else {
      res.send("Article Not Found");
    }
  },
  deleteArticle: async (req, res) => {
    let { id } = req.params;
    const { userId } = req.user;
    console.log(id);
    const article = await Articles.findOne({ id: id });
    if (article.userId === userId) {
      let data = await Articles.destroyOne({ id: id }).catch((e) => {
        console.log(e);
      });
      res.send(data);
    } else {
      res.send("Article Not Found");
    }
  },
};
