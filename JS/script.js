var cluster = document.getElementsByClassName('cluster')[0];

for (a = 0; a < exercise.length; a++)
    cluster.innerHTML += `
    <a class="box" href="HTML/${a}/index.html">
        <div>
            <h2>${exercise[a].TITLE}</h2>
            <svg class="inline-svg-icon icon">
                <use xlink:href="#${a}"></use>
            </svg>
        </div>
        <p align="center">${exercise[a].NOTE}</p>
    </a>`