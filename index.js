// Close Button and put it on each item
const QuestList = document.getElementsByTagName("li")
for ( let i = 0; 9 < QuestList; i++){
    let span = document.createElement("span");
    let text = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(text);
    QuestList[i].appendChild(span)
}

// Should work by clicking the close button and hide the present item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none"
    }
}

//New list item when pressing Add button
function newElement() {
    let li = document.createElement('li');
    let userInp = document.getElementById('userInput').value;
    let nodeTxt = document.createTextNode(userInp);
    li.appendChild(nodeTxt);

    axios
        .post('http://localhost:4040/quest' , {
            Message : 'Thanks for using the App!'
        })
        .then((res) => alert(JSON.stringify(res.data)))
    

    if (userInp === '') {
        alert("No Quest was added!");
    } else {
        document.getElementById('quesUl').appendChild(li);
    }
    document.getElementById('userInput').value = '';

    let span = document.createElement('span');
    let txtNod = document.createTextNode('\u00d7');
    
    span.className = 'close';
    span.appendChild(txtNod);

    li.appendChild(span)

    for ( let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';
        }
    }
}

axios.get('http://localhost:4040/quest').then ((res) => console.log(res.status))

