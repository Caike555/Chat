let timer = 5;
setInterval(() => {
    if(timer == 0)
    {
        window.location = document.getElementsByClassName("RedirectLink")[0].innerText;
    }
    document.getElementsByClassName("T5SecondCountDown")[0].innerHTML = "Redirecting in " + timer + " seconds";
    timer = timer -1;
}, 1000);