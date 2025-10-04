function ListGroup() {
    let items = ["Hot Dog", "Pizza", "Pasta", "Chicken", "Ice Cream"];

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className="list-group-item"
                        key={item}
                        onClick={(event) => console.log("Clicked:", item, index, event)}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
