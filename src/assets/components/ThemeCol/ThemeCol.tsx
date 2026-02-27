import './ThemeCol.scss'

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

interface ThemeColProps {
  elem: {
    elem: ReferenceItem[];
  };
  setToggleTheme: (value: string) => void;
}

const ThemeCol = ({ elem, setToggleTheme }: ThemeColProps) => {
 
  
  const elementTheme = elem[0].toggle
  
  return ( 
    <div className="theme__col">
      <ul className="theme__list">
          {elementTheme.map((el) => {
            return (
              <li key={el.name} className='theme__item'>
                <button 
                  className='theme__toggle' 
                  onClick={() => setToggleTheme(el.name)}
                >
                  <h2>{el.name}</h2>
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ThemeCol;