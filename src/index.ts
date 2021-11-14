import express, { Request, Response, NextFunction} from 'express';
import StatusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//configurção da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configurção das rotas
app.use(usersRoute);
app.use(StatusRoute);

//inicializaçao do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});

//console.log('run')