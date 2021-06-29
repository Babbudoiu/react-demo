const Cars = (props) =>{
    return (
        <div>
            <img src={props.picture} alt={props.pictureAlt} id={props.pictureId} />
            <p id={props.paraId}>{props.carsType}</p>
        </div>
    );
};

export default Cars;