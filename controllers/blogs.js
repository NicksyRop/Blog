const blogRouter = require("express").Router();
const { response } = require("express");
const Blog = require("../models/note");

blogRouter.get("/api/blogs", (req, res, next) => {
  Blog.find({})
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((error) => next(error));
});

blogRouter.post("/api/blogs", (req, res, next) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => res.status(201).json(result))
    .catch((error) => next(error));
});

module.exports = blogRouter;
