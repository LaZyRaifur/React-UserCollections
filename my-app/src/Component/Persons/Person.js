import React from 'react';

const Person = (props) => {
    console.log(props);
    const { name,email,phone,photo,Yearly_income}= props.person;
    const photoStyle = {height: '50%'};

    const personStyle = {
        
        
        border:'1px solid lightgray',
        margin:'10px',
        padding:'10px'
        
    }
    

    const handleAddPerson = props.handleAddPerson;
    return (
        <div style={personStyle}>
        
            <h4>Name: {name}</h4>
            <img style={photoStyle} src={photo} alt=""/>
    <p>E-mail: {email}</p>
    <p><small>Phone number: {phone}</small></p>
    <p>Yearly Income: {Yearly_income}</p>

    <button onClick={()=>handleAddPerson(props.person)}>Add Person</button>
        </div>
    );
};

export default Person;