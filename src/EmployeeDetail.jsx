import React from 'react';

const EmployeeDetail = props => {
    return ( 
        <div>
            Employee Number : {props.data.emp_no} <br/>
            Name : {`${props.data.first_name} ${props.data.last_name}`} <br/>
            Birth Date : {props.data.birth_date} <br/>
            Gender : {props.data.gender} <br/>
            <hr/>
        </div>
     );
}
 
export default EmployeeDetail;