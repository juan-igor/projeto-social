import React from 'react';
import { HomeRounded } from '@material-ui/icons';

const routes = [
    {
        'header': 'Navegação',
        'content': [
            {
                path: "/",
                name: "Início",
                icon: <HomeRounded />,
            },
            {
                path: "/exercicios",
                name: "Exercícios de Ajuda",
                icon: <i class="fas fa-hands-helping"></i>
            },
            {
                path: "/apoie-uma-causa",
                name: "Apoie uma Causa",
                icon: <i class="fas fa-hand-holding-heart"></i>,
            },
            {
                path: "/sobre-ansiedade",
                name: "Sobre Ansiedade",
                icon: <i class="fas fa-info"></i>,
            },
        ]
    },
  ];
  
  export default routes;