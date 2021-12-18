import React from 'react'
import PropTypes from 'prop-types';

function Profile({fullName, bio, profession, fonction, children}) {
    
    return (
        
        <div>
            {children}
            <h2 style={{color:"Blue", fontWeight:"Bold"}}>{fullName}</h2>
            {(bio.split(' ')).map((el,i)=>((i % 2===0) ? <h3 style={{color:"Black"}}>{el}</h3> :<h3 style={{color:"Blue"}}>{el}</h3>))}
            <h3 style={{color:"Blue", fontWeight:"Bold"}}>{profession}</h3>
            <button onClick={()=>fonction(fullName)}> Salut </button>
        </div>
    )
}
Profile.propTypes={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    children: PropTypes.element.isRequired
}
export default Profile
