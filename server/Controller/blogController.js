import { BLOG } from "../Model/blogModal.js";

export const getBlogs = async (req, res, next) => {
  try {
    let  { titleContains, limit = 10, skip = 0 } = req.query;
    let keyWords = titleContains
      ? { title: { $regex: titleContains, $options: "i" } }
      : {};

    let blogs = await BLOG.find(keyWords)
      .limit(parseInt(limit))
      .skip(parseInt(skip));
    let count = await BLOG.countDocuments(keyWords);

    res.send({ results: blogs, count });
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (req, res, next) => {
  try {
    let blog = await BLOG.create(req.body);
    res.send({ message: "blog Created Successfully ", blog });
  } catch (error) {
    next(error);
  }
};
export const getBlog=async(req,res,next)=>{
    try {
        let blog = await BLOG.findById(req.params.id);
        res.send(blog);
      } catch (error) {
        next(error);
      }
}
