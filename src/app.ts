import * as cron from 'node-cron';

export function runTasks(tasks: []){
    tasks.forEach( (task: { interval: string, ejec: () => {}, description: string }, index: number ) => {
        const { interval, ejec, description  } = task;
        const newTask = cron.schedule( interval, ejec);
        newTask.start();

        console.log(`task[${index}]: ${description}`)
    });
}