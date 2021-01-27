#!/usr/bin/env node


const chalk = require("chalk");
const boxen = require("boxen");
const { blue } = require("chalk");

 


console.log(boxen(chalk.green('Here ') + chalk.yellow('is my ') + chalk.red('OliCard'), {padding: 1, margin: 3, borderStyle: 'double'}));

console.log(chalk.green.bold.dim('                                                          @olione/npx-card is working'));
console.log(chalk.green.underline.italic.dim('                                                             last update: 27 Jan 2021'));
// Text + chalk definitions
const data = {
    name: chalk.green.underline.bold("             OLIVIER CHARLIER"),
    handle: chalk.white.underline.bold("OliOne                  "),
    work: chalk.white("BeCode learner"),
    twitter: chalk.gray("https://twitter.com/") + chalk.green("olione"),
    github: chalk.gray("https://github.com/") + chalk.yellow("OlivierCharlier"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.red("oliviercharlier"),
    web: chalk.gray("https://") + "olione.be",
    npx: chalk.red("npx") + " " + chalk.white("olicard"),
    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.white(
        boxen(
            [
                `${data.name} ~ ${data.handle}`,
                EMPTYLINE,
                EMPTYLINE,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                EMPTYLINE,
                `${data.labelTwitter} ${data.twitter}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                `${data.labelWeb} ${data.web}`,
                EMPTYLINE,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 3,
                margin: 3,
                borderStyle: "classic",
                borderColor: "blue",
            },
            
         ), 
    ),
);

console.log(chalk.green('                                                                  Thanks for watching,'));
console.log('                                                                               ' + chalk.green.underline.italic.bold('OliOne.'));
console.log(chalk.green.underline.italic.bold('                                                                                       '));