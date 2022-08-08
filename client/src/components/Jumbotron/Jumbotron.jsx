import "./Jumbotron.scss"; 

const Jumbotron = ({ id, head, text }) => {
    return (
        <div className="jumbotron">
            <div className="jumbotron-wrapper">
                <div key={id} className="jumbotron-main">
                    <h1>{head}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron