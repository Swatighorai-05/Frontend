// import React from 'react'
// const apiURL = "https://6881ba1366a7eb81224ba66f.mockapi.io/Table"

// function Student() {
//     fetch(apiURL)
//         .then((res) => res.json())
//         .then((res) => setData(res));//there is no setData then...

// }

// export default Student



import React from 'react'
const apiURL = "https://6881ba1366a7eb81224ba66f.mockapi.io/Table"
function Student(setData) {//pass here not const[data,setData] is needed
    fetch(apiURL)
        .then((res) => res.json())
        .then((res) => setData(res));
}

export default Student