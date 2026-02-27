
interface Sample {
  nameSample: string;
  description: string;
  code: string;
}


type Contant = Sample[]; 

interface ToggleItem {
  name: string;
  contant: Contant;
}


interface ReferenceItem {
  reference: string;
  toggle: ToggleItem[];  
}

type ReferenceArray = ReferenceItem[];

const reference: ReferenceArray = [
  {
    reference: 'React',
    toggle: [
      {
        name: 'useState',
        contant: [
          {
            nameSample: 'Счетчик',
            description: 'Создайть сложения и вычитания из значения',
            code:  `
import { useState } from 'react';

let [count,setCount] = useState(0)

<div className='block__example__filed'>
    <div className='box__button_example'>
        <button className='button__exemple' 
        onClick={()=>setCount((e)=>(e<999? e+1 : 999))}>
          <p>+</p>
        </button>
        <p>{count}</p>
        <button className='button__exemple' 
        onClick={()=>setCount((e)=>(e>0? e-1 : 0))}>
          <p>-</p>
        </button>
    </div>
</div>
            `},
          {
            nameSample: 'Поле ввода',
            description: 'Создайть компонент для ввода',
            code:  `
import { useState } from 'react';
        
let [input,setInput] = useState('')


<div className='block__example__filed'>
    <div className='box__example'>
        <input className='input__exemple' 
        onChange={(e)=>{setInput(e.target.value)}}  
        type="text" name="" 
        value={input}/>
        <p>{input}</p>
    </div>
    
</div> 
            `},
          {
            nameSample: 'Очень простой калькулятор',
            description: 'Создайте компонент с кнопками "+" и "-"...',
            code:  `
import { useState } from 'react';

let [inputCalc,setInputCalc] = useState(0)
let [inputCalc2,setInputCalc2] = useState(0)
let [calc, setCalc] = useState(0)


function calculation(a){
  const answer = eval(\`\${Number(inputCalc)} \${a} \${Number(inputCalc2)}\`)
  setCalc(answer)    
}

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
            `},
          {
            nameSample: 'Очень простой калькулятор',
            description: 'Создайте компонент с кнопками "+" и "-"...',
            code:  `

            `},
        ]
      },
      {
        name: 'useEffect',
        contant: [
          {
            nameSample: 'Счетчик',
            description: 'Создайте компонент с кнопками "+" и "-"...',
            code:''
          }
        ]
      }
    ]
  },
  
];

export default reference;