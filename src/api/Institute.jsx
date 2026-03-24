import React from 'react'
const apiURL = "https://6881ba1366a7eb81224ba66f.mockapi.io/institutes"
function Institute(setData) {//pass here not const[data,setData] is needed
    fetch(apiURL)
        .then((res) => res.json())
        .then((res) => setData(res));
}

export default Institute