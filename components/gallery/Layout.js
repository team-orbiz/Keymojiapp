import '../../styles/Style.css';
import Footer from '../Footer';
import Footerdata from '../Footerdata';
import Header from '../Header';
import Gallery from './Gallery';

const Layout = (prop) => {
    return(
        <div>
            <title>Gallery</title>
            <link rel="stylesheet" href="https://unpkg.com/@icon/themify-icons/themify-icons.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"/>
            <Header/>
            {prop.children}
            <Footerdata/>
            <Footer/>
        </div>
    );
}
export default Layout;