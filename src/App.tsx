import React, { useEffect, useState } from 'react';
import { Form, Button, Modal, ListGroup } from 'react-bootstrap';
import './App.css';
import Navigation from './components/Navbar'
const App = () => {

  const [taskName, setTaskName] = useState<string>('');
  const [taskList, setTaskList] = useState<string[]>([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //will get called one time
  useEffect(() => {
    setTaskName('')
    handleShow()

  }, [taskList.length])

  const handleTextChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setTaskName(e.target.value)
  }

  const createTask = (task: string) => {

    setTaskList([...taskList, task])
    // setTaskList(taskList.concat(task))
  }
const deleteTask = (index:number) => {
    let copyTaskList = [...taskList]
    copyTaskList.splice(index,1)
    setTaskList(copyTaskList)
}


  return (

    <div className='App m-5'>
      <Navigation />
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your task</Form.Label>
          <Form.Control
            value={taskName}
            onChange={handleTextChange}
            type="text" placeholder="I learned react today!" />
          <Form.Text className="text-muted">
            We will show your tasks to everyone!
          </Form.Text>
        </Form.Group>

        <Button
          onClick={() => createTask(taskName)}
          variant="primary" type="submit">
          Create
        </Button>
      </Form>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Yes!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Task Created Successfully!
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}  >Understood</Button>
        </Modal.Footer>
      </Modal>
      <ListGroup className='m-3'>
        {taskList.map((v, i) => {
          return (
            <div  key={i} className='d-flex m-1 align-items-center justify-content-around'>       
             <ListGroup.Item variant="primary">{v}</ListGroup.Item>
              <Button variant="danger"
              onClick={() => deleteTask(i)}
              
              >X</Button>

            </div>

          )

        })}
      </ListGroup>




    </div>

  );
}

export default App;
