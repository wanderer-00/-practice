var array = [
    'Задание',
    'Работа',
    'Сцена'
];

function preview(b) {
    var preview = document.querySelector('.preview');

    preview.innerHTML = `<iframe style="width:100%;height:100%;border:none" src="FILE/web/${array[b]}/index.html"></iframe>`;
}