import { useState } from 'react';
import './ContantCol.scss'

// Интерфейсы для данных
interface ContentItem {
  nameSample: string;
  description: string;
  code: string;
}

interface ToggleItem {
  name: string;
  contant: ContentItem[];
}

interface ReferenceItem {
  reference: string;
  toggle: ToggleItem[];
}

// Интерфейс пропсов
interface ContantColProps {
  elem: {
    elem: ReferenceItem[];
  };
  toggleTheme: string;  // строка, имя выбранной темы
}

const ContantCol = ({ elem, toggleTheme }: ContantColProps) => {
    let [count,setCount] = useState(0)
    let [input,setInput] = useState('')
    let [inputCalc,setInputCalc] = useState(0)
    let [inputCalc2,setInputCalc2] = useState(0)
    let [calc, setCalc] = useState(0)

    function calculation(a){
        const answer = eval(`${Number(inputCalc)} ${a} ${Number(inputCalc2)}`)
        setCalc(answer)
        
    }


    function test1(){
        return(
        <div className='block__example__filed'>
            <div className='box__example'>
                <button className='button__exemple' onClick={()=>setCount((e)=>(e<999? e+1 : 999))}><p>+</p></button>
                <p>{count}</p>
                <button className='button__exemple' onClick={()=>setCount((e)=>(e>0? e-1 : 0))}><p>-</p></button>
            </div>
            
        </div>
        )
    }
    function test2(){
        return(
            <div className='block__example__filed'>
                <div className='box__example'>
                    <input onChange={(e)=>{setInput(e.target.value)}} className='input__exemple' type="text" name="" value={input}/>
                    <p>{input}</p>
                </div>
                
            </div> 
        )
    }
    function test3(){
        return(
            <div className='block__example__filed'>
                <div className='box__example'>
                    <input onChange={(e)=>{setInputCalc(e.target.value)}} className='input__exemple' type="number" name="" value={inputCalc}/>
                    <p>{calc}</p>
                    <input onChange={(e)=>{setInputCalc2(e.target.value)}} className='input__exemple' type="number" name="" value={inputCalc2}/>
                </div>
                <div className='box__example'>
                    <button className='button__exemple' onClick={()=>calculation('+')}><p>+</p></button>
                    <button className='button__exemple' onClick={()=>calculation('-')}><p>-</p></button>
                    <button className='button__exemple' onClick={()=>calculation('*')}><p>*</p></button>
                    <button className='button__exemple' onClick={()=>calculation('/')}><p>/</p></button>
                    
                </div>
            </div> 
        )
    }
    let arr = [test1(),test2(),test3()]
    
    const elementContant = elem[0].toggle.filter(el=>el.name===toggleTheme)

    
    return ( 
        <div className="contant__col">
            <h1>{toggleTheme}</h1>
            
                {elementContant[0].contant.map((el,index)=>{
                    return(
                        <div key={el.nameSample} className='block__example'>
                            <div className='block__example__title'>
                                <h2>{el.nameSample}</h2>
                                <p>{el.description}</p>
                            </div>
                            
                                {arr[index]}
                                
                                
                            
                            <div className='block__example__code'>
                                <pre className='preview__code'>
                                    {el.code.split(/\r?\n/).map((el,index)=>{
                                        return (
                                            <div className='str'>
                                                <span>{index+1}</span>
                                                <span>{el}</span>
                                            </div>
                                        )
                                    })}
                                </pre>
                            </div>
                        </div>
                    )
                })}
                
            
        </div>
    );
};

export default ContantCol;