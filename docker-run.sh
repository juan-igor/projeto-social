#!/bin/bash

# Docker Run for Linux

if [[ -f "./.env" ]] then
    echo "Atenção, já existe um arquivo .env!!"
    read -p "Deseja substitui-lo por .env.example? Digite S ou N:  " -n 1 -r
    if [[ ! $REPLY =~ ^[Ss]$ ]] then
        echo "[+] Copying .env"
        cp .env.example .env
    fi
else
    echo "[+] Copying .env"
    cp .env.example .env
fi

echo ""
echo "Por favor, verifique agora o arquivo .env e o edite conforme sua necessidade para então prosseguir..."
read -p "Após conferir se as informações estão de acordo, Digite Y ou N:  " -n 1 -r
if [[ ! $REPLY =~ ^[Ss]$ ]] then
    echo ""
    echo "[+] Uploading Application Container"
    docker-compose -f docker-compose.yml up --build -d

    echo "[+] Show Docker Containers"
    docker ps
else
    [[ "$0" = "$BASH_SOURCE" ]] && exit 1 || return 1 # handle exits from shell or function but don't exit interactive shell
fi