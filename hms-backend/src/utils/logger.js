import chalk from 'chalk';


const logger = (type, message) => {

    const info = chalk.bold.green('INFO')+chalk.bold(": ")+chalk.bold.blue(message);
    const error = chalk.bold.red('ERROR')+chalk.bold(": ")+chalk.bold.blue(message);
    const warn = chalk.bold.yellow('WARN')+chalk.bold(": ")+chalk.bold.blue(message);

    if (type === 'error'){
        console.log(error);
    }else if (type === 'info'){
        console.log(info);
    }else if (type === 'warn'){
        console.log(warn);
    }

};


export { logger };