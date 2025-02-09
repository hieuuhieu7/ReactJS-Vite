
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "0px 40px 0px 40px" }}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default App
