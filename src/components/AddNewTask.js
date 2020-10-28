import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addTask, getTasks } from "../actions"
import { Button,
         Modal, 
         ModalHeader, 
         ModalBody, 
         ModalFooter, 
         Form, 
         FormGroup, 
         Label, 
         Input, 
         FormText 
       } from 'reactstrap';


const AddNewTask = (props) => {

  const [taskData,setTaskData] = useState({
                                    name: "",
                                    detail: "",
                                    toDate: "",
                                    fromDate: "",
                                    status: false
                                  })
  
  const [nameErr,setNameErr] = useState(false)
  const [detailErr,setDetailErr] = useState(false)
  const [toDateErr,setToDate] = useState(false)
  const [fromDateErr,setFromDate] = useState(false)

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal)
    setNameErr(false)
    setDetailErr(false)
    setFromDate(false)
    setToDate(false)
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setTaskData({
      ...taskData,
      [name]: value
    });
  }

  const handleSubmit = () => {
     //console.log(taskData.name,taskData.detail,taskData.toDate,taskData.fromDate,taskData.status)
     if(taskData.name.length === 0){
      setNameErr(true)
     } else
     if(taskData.detail.length === 0){
      setDetailErr(true)
    } else
    if(taskData.fromDate.length === 0){
      setFromDate(true)
    } else
    if(taskData.toDate.length === 0){
      setToDate(true)
    } else {
      const newTask = {
        "name": taskData.name,
        "detail": taskData.detail,
        "toDate": taskData.toDate,
        "fromDate": taskData.fromDate,
        "status": taskData.status
      }
      props.addTask(newTask)
      toggle()
      // props.getTasks()
    }
  }
  
  return (
    <div className="App">
      <Button color="primary" onClick={toggle} className="float-right">Add new task</Button>
      <Form>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Add new task</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="task_name">Task Name</Label>
              <Input 
                type="text" 
                name="name" 
                id="task_name" 
                value={taskData.name}
                placeholder="Enter task name" 
                onChange={handleChange}
                required
              />
              {nameErr?<span style={{color: "red"}}>This field is required</span>:null}
            </FormGroup>
            <FormGroup>
              <Label for="details">Details</Label>
              <Input 
                type="text" 
                name="detail" 
                id="details" 
                value={taskData.detail}
                onChange={handleChange}
                placeholder="Task detail" 
                required
              />
              {detailErr?<span style={{color: "red"}}>This field is required</span>:null}
            </FormGroup>
            <FormGroup>
              <Label for="from_time">Date From</Label>
              <Input 
                type="datetime-local" 
                name="fromDate" 
                id="from_time" 
                value={taskData.fromDate}
                onChange={handleChange}
             />
             {fromDateErr?<span style={{color: "red"}}>This field is required</span>:null}
            </FormGroup>
            <FormGroup>
              <Label for="to_time">Date To</Label>
              <Input 
                type="datetime-local" 
                name="toDate" 
                id="to_time" 
                value={taskData.toDate}
                onChange={handleChange}
              />
              {toDateErr?<span style={{color: "red"}}>This field is required</span>:null}
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input 
                  type="checkbox" 
                  name="status" 
                  id="status" 
                  value={taskData.status}
                  onChange={handleChange}
                />
                   Status
              </Label>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit" onClick={handleSubmit}>Add Task</Button>
            <Button color="danger" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Form>
    </div>
  );
}

export default connect(null, { addTask, getTasks })(AddNewTask);










