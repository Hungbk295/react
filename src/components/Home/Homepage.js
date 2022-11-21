import React from 'react';
import videoHomepage from '../../assets/video_homepage.mp4';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Homepage = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const account = useSelector(state => state.user.account);

    const navigate = useNavigate('')
  return (
    <div className='homepage-container'>
        <video width={`750`} height={`500`} autoPlay muted loop>
              <source
                  src={videoHomepage}
                  type="video/mp4"
              />

          </video>
          <div className='homepage-content'>
              <div className='title-1'>There's a better way to ask</div>
              <div className='title-2'>You don't want to make a boring form.
                  And your audience won't answer one.
                  Create a typeform instead-and make everyone happy.
              </div>
              <div className='title-3'>
                  <button onClick={() => {navigate('/login')}}>Get's started</button>
              </div>

          </div>
    </div>
  )
}

export default Homepage
