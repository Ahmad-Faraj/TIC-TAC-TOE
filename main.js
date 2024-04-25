let turn = 'x';
let cnt = 0;
let board = [];
function winner()
{
    for ( let i = 0 ; i < 9 ; i++)
    {
        board[i] = document.getElementById('item' + (i+1)).innerHTML;
    }
    if ((board[0] == board[1] && board[1] == board[2] && board[0] != '') ||
        (board[3] == board[4] && board[4] == board[5] && board[3] != '') ||
        (board[6] == board[7] && board[7] == board[8] && board[6] != '') ||
        (board[0] == board[3] && board[3] == board[6] && board[0] != '') ||
        (board[1] == board[4] && board[4] == board[7] && board[1] != '') ||
        (board[2] == board[5] && board[5] == board[8] && board[2] != '') ||
        (board[0] == board[4] && board[4] == board[8] && board[0] != '') ||
        (board[2] == board[4] && board[4] == board[6] && board[2] != '')) {
        return true;
    }
}

function game(id){
    let ele = document.getElementById(id);
    if ( turn === 'x' && ele.innerHTML == '' )
    {
        ele.innerHTML = 'x';
        turn = 'o';
        cnt++;
    }
    else if ( turn === 'o' && ele.innerHTML == '' )
    {
        ele.innerHTML = 'o';
        turn = 'x';
        cnt++;
    }
    if (winner())
    {
        let win = document.querySelector("span");
        if ( turn == 'x') turn = 'O';
        else turn = 'X';
        win.style.fontSize = "50px";
        win.style.transition = "0.75s";
        win.innerHTML = "The Winner is "+ turn;
        if ( turn == 'X')
        {
            win.style.color = "red";
        }
        else win.style.color = "#00FFFF";
        win.style.background = "rgb(10, 10, 10,0.5)";
        win.style.padding = "10px";
        head.style.background = "rgb(10, 10, 10,0.5)";
        setTimeout(function(){location.reload()},1000);
    }
    if (cnt === 9)
    {
        let win = document.querySelector("span");
        win.style.fontSize = "50px";
        win.style.transition = "0.75s";
        win.style.color = "#32CD32";
        win.innerHTML = "Draw";
        win.style.background = "rgb(10, 10, 10,0.5)";
        win.style.padding = "10px";
        head.style.background = "rgb(10, 10, 10,0.5)";
        setTimeout(function(){location.reload()},1000);
    }
}