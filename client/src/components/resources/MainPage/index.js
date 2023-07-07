import { Grid, Column, Tile } from '@carbon/react'
import { Typography, useMediaQuery } from '@mui/material'
import { ShoppingCart } from '@carbon/pictograms-react'
import { useTranslate } from 'react-admin'
import { CodeSnippet } from '@carbon/react'

const MainPage = () => {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const translate = useTranslate()
  return (
    <Grid>
      <Column lg={16}>
        <Tile>
          <Grid>
            <Column lg={4}>
              <ShoppingCart style={{ width: 128, height: 128 }} />
            </Column>
            <Column lg={12}>
              <Typography variant="h1">{translate('menu.header')}</Typography>
            </Column>
          </Grid>
        </Tile>
      </Column>
      <Column lg={16}>
        <Tile>
          <CodeSnippet type="multi" feedback="Copied to clipboard" wrapText={true} maxCollapsedNumberOfRows={20}>
            {`Welcome to the Carbon Design React-Admin Base Camp demo application`}
          </CodeSnippet>
        </Tile>
      </Column>
      <Column lg={16}>
        <Tile>
          <CodeSnippet type="multi" feedback="Copied to clipboard" wrapText={true} maxCollapsedNumberOfRows={20}>
            {`Prepared for Technology Fest 2023 Demo`}
          </CodeSnippet>
        </Tile>
      </Column>
      <Column lg={16}>
        <Tile>{translate('copyright')}</Tile>
      </Column>
    </Grid>
  )
}

export default MainPage
