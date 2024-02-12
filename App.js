// how to write a code with javascript 

const heading=document.createElement("h1")
        heading.innerHTML="Hello javascript Now days learning and Rivision With <br>Akshay Saini"
        //  root.appendChild(heading)

const heading1=React.createElement("h1",{id:"vikas"},"hello React.js and learning in core fundamtal")
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(heading1)