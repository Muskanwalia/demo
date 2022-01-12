import React , {useContext} from 'react';
import {FirstName} from './App';

const CompC = () => {
     const value = useContext(FirstName);
    return (
    <>
i am {value}
{/* <FirstName.Consumer>
      {value => <div>The answer is {value}.</div>}
    </FirstName.Consumer>*/}
    </>
    );
}

export default CompC;
