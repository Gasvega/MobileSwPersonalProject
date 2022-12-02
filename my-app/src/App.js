import TableOfContent from "./components/TableOfContent";
import Content from "./components/Content";
import Subject from "./components/Subject";
import { useState } from 'react';

// const Subject = (props) => {
// return (
//     <header>
//      <h1>{props.title}</h1>
//      {props.subTitle}
//     </header>
  
//   )
// }

// const TableOfContent = () => (
//   <nav>
//     <ul>
//       <li><a href = "1.html">HTML </a></li>
//       <li><a href = "1.html">CSS </a></li>
//       <li><a href = "1.html">JS </a></li>
//     </ul>
//   </nav>
// )

// const Content = (props) => (
//   <article>
//     <h2>{props.title}</h2>
//     {props.desc}
//   </article>
// )


function App() {
  const [mode, setMode] = useState("Welcome")
  const [welcome, setWelcome] = useState({title: 'Welcome', desc: "Hello"})

  const [title, setTitle] = useState("WEB")
  const [subTitle, setSubTitle] = useState("State Test!")
  const [contents, setContents] = useState( [
    {id:0, title:'HTML', desc:"HTML is HyperText..."},
    {id:1, title:'CSS', desc:"CSS is for design..."},
    {id:2, title:'JS', desc:"JS is for interactive.."},
    {id:3, title:'NodeJS', desc:"NodeJS is for server..."},
    
  ])

  const [selectedItem, setSelectedItem] = useState(0)

  var _title, _desc = null;
  if(mode === "Welcome") {
    _title = welcome.title
    _desc = welcome.desc
  }
  else if(mode === "read") {
    _title = contents[selectedItem].title
    _desc = contents[selectedItem].desc
  }

  const onChangePage = () => {
    setMode('read')
  }

const onClick = function() {
  setMode("Welcome")
}

  return (
    <div className = "APP">
      <Subject 
      title = {title} onClick = {onClick}
      subTitle = {subTitle} setMode = {setMode}> </Subject>
      <TableOfContent 
      setSelectedItem = {setSelectedItem}
      onChangePage = {onChangePage}
      data = {contents}></TableOfContent>
      <Content title = {_title} desc = {_desc}></Content>

      {/* <Content title = "HTML" desc = "HTML is HyperText"></Content> */}
    </div>
  );
}


export default App;

