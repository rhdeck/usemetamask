#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const child_process_1 = require("child_process");
const inquirer_1 = __importDefault(require("inquirer"));
const validate_npm_package_name_1 = __importDefault(require("validate-npm-package-name"));
(async () => {
    const packagePath = path_1.join(process.cwd(), "package.json");
    const p = JSON.parse(fs_1.readFileSync(packagePath, { encoding: "utf-8" }));
    //#region Update repo references
    const cmd = "git remote -v";
    const lines = child_process_1.execSync(cmd, { encoding: "utf-8" });
    const [line] = lines.split("\n");
    const [_, repo] = line.split(/\s/);
    p.repository.url = repo;
    const repobase = repo.substring(0, repo.length - ".git".length);
    p.bugs.url = path_1.join(repobase, "issues");
    p.homepage = repobase + "#README";
    //#endregion
    //#region update name of repo
    const { name, isPrivate } = await inquirer_1.default.prompt([
        {
            name: "name",
            message: "What is the name of this package?",
            default: path_1.basename(repobase),
            //   type: "editor",
            validate: (value) => validate_npm_package_name_1.default(value).validForNewPackages,
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
    fs_1.writeFileSync(packagePath, JSON.stringify(p, null, 2));
})();
//# sourceMappingURL=setup.js.map