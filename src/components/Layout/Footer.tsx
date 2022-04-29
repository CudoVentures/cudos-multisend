import { Box, Grid, Typography } from '@mui/material'

import { FooterContainer } from './styles'

import FooterLogo from '../../assets/vectors/logo-footer.svg'
import RedditIcon from '../../assets/vectors/reddit.svg'
import TwitterIcon from '../../assets/vectors/twitter.svg'
import TelegramIcon from '../../assets/vectors/telegram.svg'
import DiscordIcon from '../../assets/vectors/discord.svg'

const linksLeft = [
  { text: 'FAQ', url: 'https://www.cudos.org/' },
  { text: 'Terms & Conditions', url: 'https://www.cudos.org/' },
  { text: 'Privacy Policy', url: 'https://www.cudos.org/' },
  { text: 'cudos.org', url: 'https://www.cudos.org/' },
  { text: 'License © 2018 - 2022', url: 'https://www.cudos.org/' }
]

const linksRight = [
  { icon: RedditIcon, url: 'https://www.cudos.org/' },
  { icon: TwitterIcon, url: 'https://www.cudos.org/' },
  { icon: TelegramIcon, url: 'https://www.cudos.org/' },
  { icon: DiscordIcon, url: 'https://www.cudos.org/' }
]

const Footer = () => {
  return (
    <FooterContainer style={{display: 'flex', bottom: '2%', margin: '0', padding: '1rem 1rem 0 1rem'}} gap={6}>
      <Grid item>
        <img src={FooterLogo} alt="logo" />
      </Grid>
      <Box display="flex" alignItems="center">
        {linksLeft.map((link) => (
          <Grid
            item
            key={link.text}
            sx={({ palette }) => ({
              padding: `0 0.5rem`,
              '&:not(:last-child)': {
                borderRight: `1px solid ${palette.text.secondary}`
              },
              cursor: 'pointer'
            })}
            onClick={() => window.open(link.url, '_blank')?.focus()}
          >
            <Typography
              color="text.secondary"
              fontSize="0.8rem"
              fontWeight={500}
            >
              {link.text}
            </Typography>
          </Grid>
        ))}
      </Box>
      <Box
        alignItems="center"
        display="flex"
        gap={3}
        sx={{ marginLeft: 'auto' }}
      >
        {linksRight.map((link) => (
          <Grid
            key={link.icon}
            onClick={() => window.open(link.url, '_blank')?.focus()}
            sx={{ cursor: 'pointer' }}
          >
            <img src={link.icon} alt={link.icon} />
          </Grid>
        ))}
      </Box>
    </FooterContainer>
  )
}

export default Footer
