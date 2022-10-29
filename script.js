document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Nie można dodać pustego zadania!");
    }
    else{
        document.querySelector('#tasks').innerHTML 
        += `<div class="task">
        <span id="taskname">
        ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">USUŃ</button>
        </div>
        `;


        var current_tasks = document.querySelectorAll('.delete');

        for (var i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll('#taskname');

        for (var i = 0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector('#newtask input').
        value = "";

        var opacity = "1.0";
        var el = document.getElementById("tasks");
        if (el.style.opacity !== undefined) {
            el.style.opacity = opacity;
        } else {
            alert("Your browser doesn't support this example!");
        }
        }
}