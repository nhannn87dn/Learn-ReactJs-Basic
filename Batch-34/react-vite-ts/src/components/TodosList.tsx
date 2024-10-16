function TodosList({children}: {children: React.ReactNode}){
    return (
        <ol>
            {children}
        </ol>
    )

}

export default TodosList;