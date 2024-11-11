import ItemEstoque from "../ItemEstoque/ItemEstoque"
function ListaEstoque({ list }){
    console.log(list)
    return (
        <>
            <h1>Estoque Atual</h1>
            <ul>
                {list.map((task, index) => (
                    <ItemEstoque prod={task} index={index}/>
                ))}
            </ul>
        </>
    )
}
export default ListaEstoque;