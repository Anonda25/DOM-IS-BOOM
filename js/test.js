// const container = document.getElementById("review");
document.getElementById("submit-btn").addEventListener("click", function () {
    const inputValue = document.getElementById("text-area").value;
    //   const inputMainValue = inputValue.value
    const container = document.getElementById("review");
    const li = document.createElement("li");
    li.style.fontSize = "40px";
    li.innerText = inputValue;
    container.appendChild(li);
    document.getElementById("text-area").value = "";
});

// keybaord event

const inputValue = document.getElementById("text-area").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const inputValue = document.getElementById("text-area").value;
            const container = document.getElementById("review");
            const p = document.createElement("p");
            p.innerText = inputValue;
            container.appendChild(p);
            document.getElementById("text-area").value = "";
        }
    });

// testing parpuse of deleated of btn

const node = document.querySelector('.me');
const clone = node.cloneNode(true);

const parentNode = node.parentNode;
parentNode.innerHTML = '';
parentNode.append(clone);