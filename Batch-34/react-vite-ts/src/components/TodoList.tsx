function Item(props){
    return (
        <li>{props.task}</li>
    )
}

function TodoList(){
    console.log('TodoList render');
    return (
      <ol>
       <Item task='Quét nhà' />
       <Item task='Lau nhà' />
       <Item task='Nấu cơm' />
       <Item task='Xem phim' />
      </ol>
    )
  }

  //xuất ra để những thằng khác sử dụng
  export default TodoList