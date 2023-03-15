const form = document.getElementById("recordForm");

const recordId = document.getElementById("record_id");
const articleName = document.getElementById("article_name");
const articleBody = document.getElementById("article_body");

const postBtn = document.getElementById("postBtn");
const getBtn = document.getElementById("getBtn");
const putBtn = document.getElementById("putBtn");
const deleteBtn = document.getElementById("deleteBtn");

const responseOutput = document.getElementById("response");


postBtn.addEventListener('click', () => {
    let formData = new FormData(form);
    formData.append("date", new Date());

    fetch("https://httpbin.org/post", {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        responseOutput.innerHTML = JSON.stringify(data);
    })
})

getBtn.addEventListener('click', () => {
    let formData = new FormData(form);
    formData.append("date", new Date());
    let url = new URL("https://httpbin.org/get");
    let searchParams = new URLSearchParams(formData);
    url.search = searchParams;

    fetch(url, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        responseOutput.innerHTML = JSON.stringify(data);
    })
})

putBtn.addEventListener('click', () => {
    let formData = new FormData(form);
    formData.append("date", new Date());

    fetch("https://httpbin.org/put", {
        method: 'PUT',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        responseOutput.innerHTML = JSON.stringify(data);
    })
})

deleteBtn.addEventListener('click', () => {
    let formData = new FormData(form);
    let url = new URL("https://httpbin.org/delete");
    let searchParams = new URLSearchParams(formData);
    url.search = searchParams;

    fetch(url, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        responseOutput.innerHTML = JSON.stringify(data);
    })
})
