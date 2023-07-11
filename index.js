let num = 1;
let ol = document.getElementById('issue-list');
let heading = document.getElementById('page-heading');
let li;
main(num);
function load_prev() {
    if(num > 0 && num != 1){
        num--;
        main(num);
    }
}
function load_next() {
    num++;
    main(num);
}
function main(page) {
    heading.innerHTML = `Page number ${page}`;
    fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
        .then((res) =>
            res.json())
        .then((res) => {
            ol.innerHTML = " "
            res.forEach(issue => {
                li = document.createElement('li');
                li.innerText = issue.title;
                ol.appendChild(li);
            });
        }).catch((e) =>
            console.log(e.message))
}
