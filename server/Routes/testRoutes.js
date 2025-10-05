import express from "express";

const testRouter = express.Router();

// GET /api/test
testRouter.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Test API working ✅",
    serverTime: new Date().toLocaleString(),
  });
});

export default testRouter;
