import { runTasks } from './app';
import { SendMail } from './tasks/sendEmailDate';

function init() {
  const tasks: any = [
    {
      interval: '*/20 * * * * *',
      ejec: SendMail,
      description: 'Sending email to remenber date started.'
    },
  ]
  runTasks(tasks);
}

init();