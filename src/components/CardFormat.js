import React, {useRef} from "react";

const CardFormat = (props) => {
    const fullclick  = useRef(null)
    const {openLink} = props
  return (

    <div className="card" style={{ width: "18rem" }} onClick={()=>{fullclick.current.click()}}>
        <div className="img-badge">
            <span className="badge bg-primary">{props.source}</span>
            <img
                src={props.image}
                style={{ height: "30vh" }}
                className="card-img-top"
                alt="..."
            />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.desc.length > 90 ? props.desc + "..." : props.desc}
        </p>
        <a href={props.link} ref={fullclick} onClick={()=>{openLink()}} target="_blank" className="btn btn-primary d-none">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CardFormat;
