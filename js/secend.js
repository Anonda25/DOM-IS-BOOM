// const addLi = document.getElementById("li");

// const li = document.createElement("li");
// li.innerText = 'my frist inside a li '

// addLi.appendChild(li);

const addSection = document.getElementById('main-container');

const section = document.createElement('section');

section.innerHTML= `
<h1>Crect a new section</h1>
<p>Extra text added a inside pragrapg</p>
<ul>
<li>frist items</li>
<li>frist secend</li>
<li>frist third</li>
<li>frist fifth</li>
</ul>
`
addSection.appendChild(section);
