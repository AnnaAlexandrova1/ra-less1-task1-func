import './App.css';
import ShopItemFunc from './ShopItemFunc'
import Item from './Item';

const item = new Item({
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
})

function App() {
 /* const item = [{
      brand: 'Tiger of Sweden',
      title: 'Leonard coat',
      description: 'Minimalistic coat in cotton-blend',
      descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
      price: 399,
      currency: '£'
    }]*/
  

   /* const elements = items.map((i) => {
          return (
            <ShopItemFunc brand={i.brand} title={i.title} description={i.description}/>
          )
    })*/

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
      {item.render()}
      </div>
    </div>
  );
}

export default App;
