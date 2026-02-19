import fs from "fs/promises";
import csv from "async-csv";
import { fileURLToPath } from "url";
import path from "path";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const CSV_PATH = path.join(dirname, "..", "data", "terrorData.csv");

export const getAllTerrorists = async (req, res, next) => {
  try {
    const csvString = await fs.readFile(CSV_PATH, "utf-8");

    const rows = await csv.parse(csvString);

    res.status(200).json(rows.slice(1, 51));
  } catch (err) {
    next(err);
  }
};
