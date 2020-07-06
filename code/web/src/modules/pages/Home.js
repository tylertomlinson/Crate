// Imports

// Based on which url path the user is using, the components in the 'pages' directory are rendered accordingly. This component 
// is rendered from the '/' path. 
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H1, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { white } from '../../ui/common/colors'
import { textLevel1 } from '../../ui/common/shadows'

// App Imports
import { APP_URL } from '../../setup/config/env'
import crateRoutes from '../../setup/routes/crate'
import userRoutes from '../../setup/routes/user'
import Onboarding from './Onboarding'

// Component
const Home = (props) => (
  <div>
    {/* Home */}
    <Grid alignCenter={true} style={{
      backgroundImage: `url('${ APP_URL }/images/cover.jpg')`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      height: 'calc(100vh - 5em)',
      textAlign: 'center',
      color: white
    }}>
      {/* SEO */}
      {/* This helmet which is seen across the site is used for SEO purposes and be customized according to the current page */}
      <Helmet>
        <title>Monthly supply of clothes and accessories for Men and Women - Crate</title>
      </Helmet>

      {/* Content */}
      <GridCell>
        <H1 font="secondary" style={{ textShadow: textLevel1 }}>Crate</H1>

        <H4 style={{ textShadow: textLevel1, marginTop: '0.5em' }}>
          Your monthly subscription of trendy clothes and accessories
        </H4>

        {/* Call to action */}
        {/* if the user is authenticated, they will see a call to action to pick a crate subscription, if not they will see a call to action to signup for the service */}
        {
          props.user.isAuthenticated
            ? <Link to={crateRoutes.list.path}>
                <Button theme="secondary" style={{ marginTop: '1em' }}>Get Subscription</Button>
              </Link>
            : <Link to={userRoutes.signup.path}>
                <Button theme="secondary" style={{ marginTop: '1em' }}>Get Started</Button>
              </Link>
        }
      </GridCell>
    </Grid>

    {/* Onboarding */}
    <Onboarding/>
  </div>
)

// Component Properties
Home.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function homeState(state) {
  return {
    user: state.user
  }
}

export default connect(homeState, {})(Home)
