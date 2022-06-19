import Header from '../Header';

const Layout = (props: any) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}

export default Layout;