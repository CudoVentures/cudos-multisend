import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { RootState } from '../../store'
import NetworkInfo from './NetworkInfo'

import LogoHeader from '../../assets/vectors/logo-header.svg'
import UserInfo from './UserInfo'

const Header = () => {
  const location = useLocation()

  return (
    <Box sx= {location.pathname === '/' ? {padding: '1.45rem 1rem 1rem 1rem'}:{ padding: '1rem 1rem 1rem 1rem'}}>
      <Box sx={{alignItems: 'center', display: 'flex', flex: '1' }}>
        <a href={window.location.origin}>
          <img src={LogoHeader} alt="logo"/>
        </a>
        {location.pathname === '/' ? null : (
          <Box
            sx={{
              paddingLeft: '1rem',
              display: 'flex',
              justifyContent: 'flex-end',
              flex: '1'
            }}
          >
            <NetworkInfo />
            <UserInfo />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Header
