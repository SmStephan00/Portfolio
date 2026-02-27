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
  toggleTheme: string;
}

const ContantCol = ({ elem, toggleTheme }: ContantColProps) => {
    let [count, setCount] = useState(0);
    let [input, setInput] = useState('');
    let [inputCalc, setInputCalc] = useState(0);
    let [inputCalc2, setInputCalc2] = useState(0);
    let [calc, setCalc] = useState(0);

    function calculation(a: string) {
        const answer = eval(`${Number(inputCalc)} ${a} ${Number(inputCalc2)}`);
        setCalc(answer);
    }

    function test1() {
        return (
            <div className='block__example__filed'>
                <div className='box__example'>
                    <button className='button__exemple' onClick={() => setCount((e) => (e < 999 ? e + 1 : 999))}><p>+</p></button>
                    <p>{count}</p>
                    <button className='button__exemple' onClick={() => setCount((e) => (e > 0 ? e - 1 : 0))}><p>-</p></button>
                </div>
            </div>
        );
    }
    
    function test2() {
        return (
            <div className='block__example__filed'>
                <div className='box__example'>
                    <input onChange={(e) => setInput(e.target.value)} className='input__exemple' type="text" value={input} />
                    <p>{input}</p>
                </div>
            </div>
        );
    }
    
    function test3() {
        return (
            <div className='block__example__filed'>
                <div className='box__example'>
                    <input onChange={(e) => setInputCalc(Number(e.target.value))} className='input__exemple' type="number" value={inputCalc} />
                    <p>{calc}</p>
                    <input onChange={(e) => setInputCalc2(Number(e.target.value))} className='input__exemple' type="number" value={inputCalc2} />
                </div>
                <div className='box__example'>
                    <button className='button__exemple' onClick={() => calculation('+')}><p>+</p></button>
                    <button className='button__exemple' onClick={() => calculation('-')}><p>-</p></button>
                    <button className='button__exemple' onClick={() => calculation('*')}><p>*</p></button>
                    <button className='button__exemple' onClick={() => calculation('/')}><p>/</p></button>
                </div>
            </div>
        );
    }
    
    let arr = [test1(), test2(), test3()];
    
    // ✅ Правильный доступ к данным: elem.elem[0].toggle
    const elementContant = elem?.elem?.[0]?.toggle?.filter(el => el.name === toggleTheme) || [];
    
    if (!elementContant.length) {
        return <div>Нет данных для темы {toggleTheme}</div>;
    }

    return ( 
        <div className="contant__col">
            <h1>{toggleTheme}</h1>
            
            {elementContant[0].contant.map((el, index) => (
                <div key={el.nameSample} className='block__example'>
                    <div className='block__example__title'>
                        <h2>{el.nameSample}</h2>
                        <p>{el.description}</p>
                    </div>
                    
                    {arr[index]}
                    
                    <div className='block__example__code'>
                        <pre className='preview__code'>
                            {el.code.split(/\r?\n/).map((line, i) => (
                                <div key={i} className='str'>
                                    <span>{i + 1}</span>
                                    <span>{line}</span>
                                </div>
                            ))}
                        </pre>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContantCol;