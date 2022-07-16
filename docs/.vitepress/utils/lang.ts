import fs from "fs";
import path from "path";
import { docRoot } from "@gf-ui/build-utils";

export const languages = fs.readdirSync(path.resolve(__dirname, "../crowdin"));

export const ensureLang = (lang: string) => `/${lang}`;

export const getLang = (id: string) =>
  path.relative(docRoot, id).split(path.sep)[0];
