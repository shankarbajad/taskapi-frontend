import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux'
import { getTasks } from "../actions"



const TaskList = (props) => {

  useEffect(()=>{
    props.getTasks()
  },[props])

  return (
    <div className="App">
      <Table>
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Task Detail</th>
          <th>To Date</th>
          <th>From Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks && props.tasks.map(item => {
          return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.detail}</td>
                    <td>{item.fromDate}</td>
                    <td>{item.toDate}</td>
                    <td>{(item.status === true)?'True':'False'}</td>
                  </tr>
                 )
        })}   
      </tbody>
    </Table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.taskReducer.tasks
  }
}

export default connect(mapStateToProps,{ getTasks })(TaskList);
