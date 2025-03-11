const Card = ({ image, selected, onClick }) => {
    return (
        <div className="card">
            <div className={selected ? 'selected' : ''}>
                <img
                    className="card-face"
                    src={image}
                    alt=""
                />
                <img
                    className="card-back"
                    src={'/assets/red-deck.png'}
                    alt=""
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

export default Card;