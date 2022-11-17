let listUser = document.getElementById('listUser')
let editUser = document.getElementById('edUser')
// let deleteUser = document.getElementById('delUser')
getUser()
function getUser(){
    fetch("https://gorest.co.in/public/v2/users")
    .then((response) => 
        response.json()
    )
    .then((data) => {
        console.log(data)
        data.forEach(showList)
    })
    .catch((error) => {
        console.log(error)
    })
}

function showList(value,index){
    listUser.innerHTML += `<tr>
    <td>${value.name}</td>
    <td>${value.email}</td>
    <td>${value.gender}</td>
    <td>${value.status}</td> 
    <td><button class="btn btn-primary" id="edUser" onclick="editUser(${value.id})">Edit</button></td> 
    <td><button class="btn btn-danger" id="delUser" onclick="deleteUser(${value.id})">Delete</button></td>
    </tr>
    
    `
}

function deleteUser(id){
   
        fetch("https://gorest.co.in/public/v2/users" + id, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer ab03f0e11af4e49674af3f684717a0f9b89ac98ccc28f7bf729adb5410707a83"
            }
        })
        .then((response) => {
            console.log(response)
            listUser.innerHTML = ""
            getUser()
        })
        
        .catch((error) => {
            console.log(error)
        })
    }


// deleteUser.addEventListener('click', function(id) {
//     fetch("https://gorest.co.in/public/v2/users" + id, {
//         method: "DELETE",
//         headers: {
//             Authorization: "Bearer ab03f0e11af4e49674af3f684717a0f9b89ac98ccc28f7bf729adb5410707a83"
//         }
//     })
//     .then((response) => {
//         console.log(response)
//         listUser.innerHTML = ""
//         getUser()
//     })
//     .then((data) => {

//     })
//     .catch((error) => {
//         console.log(error)
//     })
// })