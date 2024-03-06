import { EmailOptions } from '../models/EmailOptions';

export function getNextDateEmailTemplate (
  userEmail: string,
  userName: string,
  clientName: string,
  time: string,
  issue: string
): EmailOptions {
  return new EmailOptions(
    'admcontrol504@gmail.com',
    userEmail,
    'Cita pendiente',
    `<!DOCTYPE html>
                      <html lang="en">
                        <head>
                          <meta charset="UTF-8">
                          <meta https-equiv="X-UA-Compatible" content="IE=edge">
                          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                          <title>Document</title>
                          <style>
                            body {
                              background-color: #f5f5f5;
                              font-family: Arial, Helvetica, sans-serif;
                              line-height: 1.5;
                              text-align: center;
                            }
                            .titulo{
                              text-align: center;
                              max-width: 500px;
                              width: 90%;
                              margin: 20px auto 0 auto;
                              padding: 20px;
                              background-color: rgb(3, 57, 103);
                              border-radius: 15px 15px 0 0;
                              box-shadow: 0 -2px 7px 0 rgba(166,166,166,1);
                            }
                            .contenedor{
                              text-align: center;
                              max-width: 500px;
                              width: 90%;
                              margin: 0 auto;
                              padding: 20px;
                              border-radius: 0 0 15px 15px;
                              background-color: white;
                              box-shadow: 0 2px 7px 0 rgba(166,166,166,1);
                            }
                            h1 {
                              width: 100%;
                              color: #fff;
                              margin: 0;
                            }
                            p{
                              color: #333;
                              font-size: 18px;
                            }
                          </style>
                        </head>
                        <body>
                          <div class="titulo">
                              <h1>Cita proxima</h1>
                          </div>
                            <div class="contenedor">
                              <p>
                                Hola, <strong>${userName}</strong> tienes una citas pendiente proximamente con el cliente <strong>${clientName}</strong> a las <strong>${time}</strong> por el asunto de <strong>${issue}</strong>.
                              </p>
                              <p>
                                Recuerda que siempre recibiras correos para mantenerte al tanto sobre las proximas citas.
                              </p>
                            </div>
                        </body>
                      </html>`
  );
}