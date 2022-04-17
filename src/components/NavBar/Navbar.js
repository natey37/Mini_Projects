import ContentMenu from './ContentMenu'
/** @jsxImportSource @emotion/react */

export default function Navbar() {
    return (
        <div css={theme => ({ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.primary.main })}>
            <h1>Mini Games</h1>
            <ContentMenu />
        </div>
    )
}