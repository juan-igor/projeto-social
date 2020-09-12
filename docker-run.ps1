# Docker Run for Windows

$execute = $false;

$title = 'Por favor, verifique agora o arquivo .env e o edite conforme sua necessidade para entao prosseguir...'
$question = 'Apos conferir se as informações estao de acordo, deseja prosseguir?'
$choices = '&Sim', '&Nao'

$title2 = 'Atencao, ja foi detectado a existencia de um arquivo .env!!'
$question2 = 'Deseja substituir o arquivo .env atual por .env.example?'

if (Test-Path '.\.env' -PathType Leaf) {
    $decision2 = $Host.UI.PromptForChoice($title2, $question2, $choices, 1)
    if ($decision2 -eq 0) {
        Write-Host "[+] Copying .env"
        Copy-Item .env.example .env

        $decision = $Host.UI.PromptForChoice($title, $question, $choices, 1)
        if ($decision -eq 0) { $execute = $true }
    }
    else {
        $execute = $true;
    }
}
else {
    Write-Host "[+] Copying .env"
    Copy-Item .env.example .env

    $decision = $Host.UI.PromptForChoice($title, $question, $choices, 1)
    if ($decision -eq 0) { $execute = $true }
}

if ($execute) {
    Write-Host ""
    Write-Host "[+] Uploading Application Container"
    docker-compose -f docker-compose.yml up --build -d

    Write-Host "[+] Show Docker Containers"
    docker ps
}
else {
}