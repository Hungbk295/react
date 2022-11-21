import ModalCreateUser from "./ModalCreateUser"
import { IoAdd } from 'react-icons/io5';
import TableUser from "./TableUser";
import React, { useEffect, useState } from 'react'
import { getAllUser } from '../../services/apiService';
import { toast } from "react-toastify";


const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUsers, setLitUsers] = useState([
        // {
        //     "id": 7,
        //     "username": "Jaychun",
        //     "email": "bruh@gmail.com",
        //     "role": "ADMIN",
        // }
    ])
   
    useEffect(() => {
        fetchListUsers();
    }, []);

     const fetchListUsers = async() => {
        let res = await getAllUser();
        if (res.data.EC === 0) {
            setLitUsers(res.data.DT)
            
        }
    }
  return (
    <div className='manage-user-container'>
          <div className='title'>
              Manage User
          </div>
          <div className="users-content">
              <div className="btn-add-new">
                  <button className="btn btn-primary " onClick={() => setShowModalCreateUser(true)}> <IoAdd /> Add New User</button>
              </div>
              <div className="table-users-container">
                  <TableUser listUsers={listUsers}/>
             </div>
              <ModalCreateUser
                  show={showModalCreateUser}
                  setShow={setShowModalCreateUser}
                  fetchListUsers={fetchListUsers}

              />

          </div>
          
    </div>
  )
}

export default ManageUser
