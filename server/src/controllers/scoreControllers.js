import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const JSON_PATH = path.join(dirname, "..", "data", "score.json");

export const setScore = async (req, res, next) => {
  const scoreToAdd = req.body.score;
  try {
    const jsonString = await fs.readFile(JSON_PATH, "utf-8");

    let score = await JSON.parse(jsonString);

    score = +score[0].score + scoreToAdd;
    const data = [{ score: String(score) }];
    const jsonToLoad = JSON.stringify(data);

    fs.writeFile(JSON_PATH, jsonToLoad, "utf8");

    res.status(200).end();
  } catch (err) {
    next(err);
  }
};
