import { Link } from 'react-router-dom';
import Layouts from '../Layouts/Layouts';

const Welcome = () => {
    const headerContent = <><h1>Welcome</h1></>

  return (
    <Layouts header={headerContent}>
    <div>
        <Link to="/accordian">
            <button>Accordian</button>
        </Link>
        <Link to="/calculator">
            <button>calculator</button>
        </Link>
    </div>
    </Layouts>
  )
}

export default Welcome