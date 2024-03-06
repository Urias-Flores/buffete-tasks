import * as nodemailer from 'nodemailer';
import { getDates, formatDate } from '../services/dates';
import { EmailOptions } from '../models/EmailOptions';
import { getNextDateEmailTemplate } from '../templates/email-templates';

export async function SendMail() {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "admcontrol504@gmail.com",
        pass: "wwncwmmqaxqbdcbz",
      },
    });
  
    const dates = await getDates();
  
    dates.forEach( (date: any) =>  {
        const dateDateTime = new Date(date.DateTime);
        const currenteDateTime = new Date();
        const adjustedDate = new Date(currenteDateTime.getTime() - currenteDateTime.getTimezoneOffset() * 60000);

        console.log(`Verifing: ${dateDateTime} <=> ${adjustedDate}`)
        const dif = (dateDateTime.getTime() - adjustedDate.getTime()) / (10000 * 6);
        console.log(`Dif: ${dif}`);

        if(dif > 0 && dif <= 30){
            console.log('Sending email...');
            const mailOptions: EmailOptions = getNextDateEmailTemplate(
                date.User.Email,
                date.User.Name,
                date.Client.Name,
                formatDate(dateDateTime),
                date.Issue
            );
    
            console.log(`Sending email to: ${date.User.Email}`);
            
            transporter.sendMail(mailOptions, (error: any, info: any) => {
            if (error) {
                console.log("Error al enviar el correo:", error);
            } else {
                console.log("Correo enviado:", info.response);
            }
            });
        }
    });
  }
  