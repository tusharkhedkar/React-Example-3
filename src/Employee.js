import React from 'react';


class Employee extends React.Component{

    
    render(){
        return(
            <tbody>
           <tr>
                <td>{this.props.emp.empId}</td>
                <td>{this.props.emp.empName}</td>
                <td>{this.props.companyName}</td>
            </tr>
            </tbody>
        )
    }
}


Employee.defaultProps = {
    companyName:"Yash"
}

export default Employee;