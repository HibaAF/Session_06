function getAllStudents()
{
    fetch('http://localhost:1999/getAllStudents')
    .then(response => response.json())
    .then(json =>
        {
            let studentsul = document.getElementById('students');
            json.forEach(s => {
                let studentli = document.createElement('li');
                studentli.innerHTML = s.name;
                studentsul.appendChild(studentli);


            });
        })
}
