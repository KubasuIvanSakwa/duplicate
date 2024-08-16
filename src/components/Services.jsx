
function Services(props) {

    return (
        <div className="service-card">
            <h3 className="service-name">{props.name}</h3>
            <p className="service-price">Ksh {props.price}</p>
            <p className="service-description">{props.description}</p>
                {
                    props.video &&
                    <div className='vidclass'>
                        <video autoPlay controls='false'>
                        <source src={props.video} type="video/mp4" />
                        </video>
                    </div>
                }
        </div>
    )
}

export default Services