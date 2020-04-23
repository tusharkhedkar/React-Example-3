import React from 'react';

import Employee from './Employee';
import './EmployeeInformation.css';

class EmployeeInformation extends React.Component {
    constructor() {
        super();
        this.state={
        empInfo :[
            {
              empId:101,
              empName:"Tushar",
            },
            {
              empId:102,
              empName:"Akshay",
            },
            {
              empId:103,
              empName:"Omkar",
            }
            ]
        }
    }

    render() {
        return (
           <table >
                {this.state.empInfo.map((emp)=>{
                        return <Employee key={emp.empId} emp={emp} />
                    })}
               </table>
        )
    }

    
}


export default EmployeeInformation;