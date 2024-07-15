


function Cardbackground(props) {

    return (
        <div className="card">
            <div className="container1">
                
                <img className="andriod" src={props.svg} alt="" />
                <h3 className="text1">{props.title}</h3>
                <h5 className="text2">{props.description}</h5>


            </div>
5



        </div>


    );
}





export default Cardbackground;