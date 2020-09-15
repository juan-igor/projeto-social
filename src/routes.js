import React from 'react';
import { HomeRounded, InfoOutlined } from '@material-ui/icons';

const routes = [
    {
        'header': 'Navegação',
        'content': [
            {
                path: "/",
                name: "Início",
                icon: <HomeRounded fontSize="large" />,
            },
            {
                path: "/exercicios",
                name: "Exercícios de Ajuda",
                icon: <i className="fas fa-hands-helping"></i>
            },
            {
                path: "/apoie-uma-causa",
                name: "Apoie uma Causa",
                icon: <i className="fas fa-hand-holding-heart"></i>,
            },
            {
                path: "/sobre-ansiedade",
                name: "Sobre Ansiedade",
                icon: <InfoOutlined fontSize="large" />,
                // icon: <i className="fas fa-info"></i>,
            },
        ]
    },
  ];
  
  export default routes;