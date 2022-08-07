import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (  
        <>
        
          <Head>
              <title>Real Estate App</title> 
              <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
          </Head>
          <Box maxWidth="1280px" m="auto">
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
          </Box>
        </>
    );
}
 
export default Layout;