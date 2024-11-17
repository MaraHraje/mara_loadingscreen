-- FiveM event, který se spustí při spawnování hráče
AddEventHandler('playerSpawned', function()
    -- Odeslání zprávy do NUI (HTML), aby se skryl loading screen
    SendNUIMessage({
        action = 'hideLoadingScreen'
    })
end)