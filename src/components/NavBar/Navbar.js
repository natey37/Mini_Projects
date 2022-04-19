import ContentMenu from './ContentMenu'
/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div css={theme => ({ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.primary.main })}>
            <Link css={{textDecoration: 'none', color: 'black'}}to='/'><h1>Mini Games</h1></Link>
            <ContentMenu />
        </div>
    )
}