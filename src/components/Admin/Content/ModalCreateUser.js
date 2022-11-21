import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./ManageUser.scss"
import { IoAdd } from 'react-icons/io5';
import { postCreateNewUser } from '../../services/apiService';

const ModalCreateUser = (props) => {
    const { show , setShow} = props;
    // const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");
        setPreviewImage("");
    }
    const handleShow = () => setShow(true);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER")
    const [image, setImage] = useState("");

    const[previewImage,setPreviewImage] = useState("")

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        } else {

        }
        
    }

    const handleSubmitCreateUser = async() => {
        // let data = {
        //     email: email,
        //     password: password,
        //     username: username,
        //     role: role,
        //     userImage: image
        // }
        // console.log(data)

        ;

        let res = await postCreateNewUser(email, password, username, role, image);
        console.log("check ressssss", res)
        await props.fetchListUsers()
        if (res.data.EC === 0) {
            setShow(false)
        }
        if (res.response.data.EC === 500) {
            alert('Error')
        }

    }



  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

          <Modal className='modal-add-user'
              show={show}
              onHide={handleClose}
              size='xl'
            backdrop='static'
          >
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
              <Modal.Body>
                  <form className="row g-3">
                    <div className="col-md-6">
                        <label >Email</label>
                          <input
                              type="email"
                              className="form-control"
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                          />
                    </div>
                    <div className="col-md-6">
                        <label >Password</label>
                          <input
                              type="password"
                              className="form-control"
                              value={password}
                              onChange={(event) => setPassword(event.target.value)}

                          />
                    </div>
                    <div className="col-md-6">
                        <label >Username</label>
                          <input
                              type="text"
                              className="form-control"
                              value={username}
                              onChange={(event) => setUsername(event.target.value)}

                          />
                    </div>
                    <div className="col-md-6">
                        <label >Role</label>
                        <select defaultValue="USER" className="form-select" onChange={(event) => setRole(event.target.value)}>
                        <option  >USER</option>
                        <option  >ADMIN</option>
                        </select>
                    </div>
                      <div className='col-md-12'>
                          <label className='form-label label-upload btn btn-primary' htmlFor='labelUpload' ><IoAdd />Upload File Image</label>
                          <input
                              type="file"
                              hidden
                              id='labelUpload'
                              onChange={(event) => handleUploadImage(event)}
                          
                          />
                    </div>
                      <div className='col-md-12 img-preview'>
                          {
                              previewImage ?
                             <img src = {previewImage} />
                            :
                            <span>Preview Image</span>
                          }
                      </div>
                    </form>
              </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreateUser;