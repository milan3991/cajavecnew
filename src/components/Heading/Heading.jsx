import "./heading.style.css"; 

const Heading = ({ heading, headingbackground }) => {
    return (
      <div className="naslov_container">
        <h1 className="naslov_pozadina">{headingbackground}</h1>  
        <h2 className="naslov_prednji">{heading}</h2>
        <div className="linija"></div>
      </div>
    );
  };
  
  export default Heading;