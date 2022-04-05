import ContentMenu from './ContentMenu'
/** @jsxImportSource @emotion/react */

export default function Navbar() {
    return (
        <div css={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <h1>Mini Projects</h1>
            <ContentMenu />
        </div>
    )
}