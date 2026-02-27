
import { useState } from 'react';

import ContantCol from "../../components/ContantCol/ContantCol";
import Header from "../../components/Headers/Header";
import ThemeCol from "../../components/ThemeCol/ThemeCol";

import reference from '../../reference'

import './ReactPage.scss'

const ReactPage = () => {

    

    let elem = reference.filter(item=> item.reference === 'React')

    

    const [toggleTheme,setToggleTheme] = useState(elem[0].toggle[0].name)

    

    return ( 
        <div className="demo__blcok">
            <Header text={`React`}/>
            <div className="content__demo">
                
                <ThemeCol setToggleTheme={setToggleTheme} elem={elem}/>
                <ContantCol toggleTheme={toggleTheme} elem={elem}/>
                
            </div>
        </div>
     );
}
 
export default ReactPage;