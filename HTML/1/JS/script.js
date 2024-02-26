var cluster = document.getElementsByClassName('cluster')[0];

for (a = 0; a < exercise.length; a++)
    cluster.innerHTML += `
    <div class="box">
        <div>
            <div class="TD">
                <a class="title" href="HTML/${a}/index.html">${exercise[a].TITLE}</a>
                <div class="date">${exercise[a].DATE}</div>
            </div>
            <svg class="inline-svg-icon icon">
                <use xlink:href="#${a}"></use>
            </svg>
        </div>
        <p align="center">${exercise[a].NOTE}...</p>
    </div>`
