var prevGameInMemory = true;


// resume game button
if (getCurrentGame() == null ||
    (getCurrentGame().p1Points == 0 && getCurrentGame().p2Points == 0)) {
    prevGameInMemory = false;
    $('#resumeGameButton').hide();
} else {
    $('#resumeGameButton span#resumeScoreP1').html(getCurrentGame().p1Points);
    $('#resumeGameButton span#resumeScoreP2').html(getCurrentGame().p2Points);
    if (getSettings().vsCPU) {
        $('#resumeGameButton span#resumeCPUP2').html('🤖');
    }
}

$('#resumeGameButton').click(function() {
    window.location.href = "pages/game.html";
});

//new game buttons
$('#vsHumanButton').click(function() {
    if (!prevGameInMemory || confirm('Are you sure you want to start a new game?\n\nYou will lose your current game.')) {
        createNewCurrentGame();
        updateSettings('vsCPU', false);
        window.location.href = "pages/game.html";
    }
});
$('#vsCPUButton').click(function() {
    if (!prevGameInMemory || confirm('Are you sure you want to start a new game?\n\nYou will lose your current game.')) {
        createNewCurrentGame();
        updateSettings('vsCPU', true);
        window.location.href = "pages/game.html";
    }
});


//settings menu
$('#settingsButton').click(function() {
    if (!prevGameInMemory || confirm('Are you sure you want to go to the settings page?\n\nYou will lose your current game.')) {
        createNewCurrentGame();
        window.location.href = "pages/settings.html";
    }
});
$('#settings-reset-button').click(function() {
    resetSettings();
    window.location.reload();
});

//num to win
$('#numToWin-Setter').ready(function() {
    $('#numToWin-Setter').val(getSettings().pointsNeededToWin);
});
$('#numToWin-Setter').change(function() {
    if ($('#numToWin-Setter').val() < 1) {
        $('#numToWin-Setter').val(1);
    }
    updateSettings('pointsNeededToWin', $('#numToWin-Setter').val());
});

//early fires
$('#earlyFire-Setter').ready(function() {
    $('#earlyFire-Setter').prop('checked', getSettings().misfiresCheckedFor);
});
$('#earlyFire-Setter').change(function() {
    updateSettings('misfiresCheckedFor', $('#earlyFire-Setter').prop('checked'));
});

//leaderboard page ==----------------------------------------
$('#leaderboardButton').click(function() {
    alert('coming soon!');
});