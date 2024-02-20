var files = [
    {
        "NAME": "Задание",
        "ICON": "docx"
    }
];

var file_sys = document.getElementsByClassName('file_sys')[0];

for (a = 0; a < files.length; a++) {
    file_sys.innerHTML += `
        <div class="box" onclick="preview(${a})">
            <img src="../../IMG/file icon/${files[a].ICON}.svg" alt="file logo">
            <div class="name">${files[a].NAME}</div>
            <a href="FILE/${files[a].NAME}.${files[a].ICON}" download title="Скачать файл">
                <img class="download" src="../../IMG/download.svg" alt="download icon">
            </a>
        </div>
    `
}