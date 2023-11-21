let section15_right = document.querySelector(".section15_right")

let data = "http://localhost:3000/data"


async function getData() {
    try {

        let reponse = await fetch(url)
        let data = await reponse.json()
        get(data)
    } catch (error) {
        console.error(error)
    }
}


// get
function get(newData) {
    newData.forEach(element => {



        
    });
}