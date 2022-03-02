type ListType = {
    options: any,
    setSelected: any,
    onChange: any,
    handleShow: any,
    filter?: string
}

export function List({ options, setSelected, onChange, handleShow, filter }) {
    const pattern = new RegExp(filter.toUpperCase());
    return (
        <>
            {filter != '' && options && options.length > 0 ? options.map(item => (
                <>
                    {pattern.test(item.name ? item.name.toUpperCase() : item.toUpperCase()) ? <li key={item.id ?? item} onClick={() => {
                        setSelected(item.name ?? item);
                        onChange(item.id ?? item);
                        handleShow();
                    }}>
                        {item.name ? item.name.toUpperCase() : item}
                    </li> : null}
                </>
            )) : null
            }
            {options && options.length > 0 && filter === '' ? options.map(item => (
                <li key={item.id ?? item} onClick={() => {
                    setSelected(item.name ?? item);
                    onChange(item.id ?? item);
                    handleShow();
                }}>
                    {item.name ? item.name.toUpperCase() : item}
                </li>
            )) : null}
        </>
    )
}