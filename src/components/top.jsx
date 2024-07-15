import emaillogo from "./email.svg"
import locationlogo from "./location-pin-svgrepo-com.svg"
import twitterlogo from "./twitter-round-svgrepo-com.svg"





function Top() {

    return (
        <div className="top">
            <div className="container">
                <img className="emaillogo" src={emaillogo} alt="" />
                <h4 className='email'>Email Address: info@drosophilartc.org</h4>
                <img className="locationlogo" src={locationlogo} alt="" />
                <h4 className='address'> Office Address: 42 Salami Somade Estate, Bashorun, Ibadan, Nigeria.</h4>
                <img className="twitterlogo" src={twitterlogo} alt="" />
            </div>
          <hr></hr>
        </div>


    );
}





export default Top;

