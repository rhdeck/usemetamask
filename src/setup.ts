#!/usr/bin/env node
import { join, basename } from "path";
import { readFileSync, writeFileSync } from "fs";
import { execSync, spawnSync } from "child_process";
import inquirer from "inquirer";
import validatePackage from "validate-npm-package-name";
(async () => {
  const packagePath = join(process.cwd(), "package.json");
  const p = JSON.parse(readFileSync(packagePath, { encoding: "utf-8" }));
  //#region Update repo references
  const cmd = "git remote -v";

  const lines = execSync(cmd, { encoding: "utf-8" });
  const [line] = lines.split("\n");
  const [_, repo] = line.split(/\s/);
  p.repository.url = repo;
  const repobase = repo.substring(0, repo.length - ".git".length);
  p.bugs.url = join(repobase, "issues");
  p.homepage = repobase + "#README";
  //#endregion
  //#region update name of repo
  const { name, isPrivate } = await inquirer.prompt([
    {
      name: "name",
      message: "What is the name of this package?",
      default: basename(repobase),
      //   type: "editor",
      validate: (value) => validatePackage(value).validForNewPackages,
    },
    {
      name: "isPrivate",
      message: "Keep this package private?",
      type: "confirm",
      default: false,
    },
  ]);
  p.name = name;
  p.private = isPrivate;
  //#endregion
  writeFileSync(packagePath, JSON.stringify(p, null, 2));
})();
