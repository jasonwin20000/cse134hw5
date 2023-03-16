const form = document.getElementById("recordForm");

const postBtn = document.getElementById("postBtn");
const getBtn = document.getElementById("getBtn");
const putBtn = document.getElementById("putBtn");
const deleteBtn = document.getElementById("deleteBtn");

const responseOutput = document.getElementById("response");

const recordDate = document.getElementById("date"); 
recordDate.value = new Date().toLocaleString();

postBtn.addEventListener('click', () => {
    let formData = new FormData(form);

    fetch("https://httpbin.org/post", {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        responseOutput.innerHTML = formatData(data);
    });
});

getBtn.addEventListener('click', () => {
    let formData = new FormData(form);
    let url = new URL("https://httpbin.org/get");
    let searchParams = new URLSearchParams(formData);
    url.search = searchParams;

    fetch(url, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        responseOutput.innerHTML = formatData(data);
    });
});

putBtn.addEventListener('click', () => {
    let formData = new FormData(form);

    fetch("https://httpbin.org/put", {
        method: 'PUT',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        responseOutput.innerHTML = formatData(data);
    });
});

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
        responseOutput.innerHTML = formatData(data);
    });
});

function formatData(data) {
    let html = "<table>";
        for (let x in data) {
        html += `<tr><th>${x}</th></tr>`;
        if (typeof data[x] === "object") {
            for (let y in data[x]) {
                html += `<tr><td>${y}</td><td>${data[x][y]}</td></tr>`;
            }
        } 
        else {
            html += `<tr><td>${x}</td><td>${data[x]}</td></tr>`;
        }
    }
    html += "</table>";
    return html;
}