const TableOfContent = (props) => { 
  const data = props.data
  var list = []
  var i = 0
  while(i<data.length){

    list.push(<li key =  {data[i].id}>
      <a href={"/content"+data[i].id} data-id = {data[i].id} onClick = {
        function(e) {
          e.preventDefault();
          props.setSelectedItem(e.target.dataset.id)
          props.onChangePage()
        }

      }> 
      { data[i].title } </a></li>
       ) //배열에 값을 넣겠다
      i = i + 1
    }
    return(
    <nav>
      <ul>
        {list}
        {/* <li><a href = "1.html"> HTML </a></li>
        <li><a href = "1.html"> CSS </a></li>
        <li><a href = "1.html"> JS </a></li> */}
      </ul>
    </nav>
  )
}

export default TableOfContent;