import Header from "./Header";
import Search from "./Search";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <Search />
            <main className={"container mx-auto my-7"}>{children}</main>
        </>
    );
};

export default Layout;