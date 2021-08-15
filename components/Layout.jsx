import Header from "./Header";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main className={"container mx-auto my-7"}>{children}</main>
        </>
    );
};

export default Layout;