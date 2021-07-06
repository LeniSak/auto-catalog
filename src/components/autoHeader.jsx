function autoHeader (props) {
    const kit_name = props.kit_name || ""

    let price = props.price
                    .toString()
                    .split('')
                    .reverse()
                    .join('')
                    .replace(/(\d{1,3})/g , '$1 ')
                    .split('')
                    .reverse()
                    .join('')
    return (
        <div 
            className='auto__header' 
        >
            <img
                src={props.url}
                className = "auto__img"
                alt = 'Фото машины'
            />
            <p className="auto__title">{props.name + " " + kit_name}</p>
            <p className="auto__price">{price + ' руб.'}</p>
        </div>
        
    )
}

export default autoHeader