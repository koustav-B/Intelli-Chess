const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    console.log(name);
    localStorage.setItem("name",name);
    window.location.href = 'http://127.0.0.1:5500/index.html?'
}
const form = document.getElementById('myform');
form.addEventListener('submit', handleSubmit);