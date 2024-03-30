import Feature from './Feature';
import './Card.css'

export const Card = (props) => {
  const { type } = props.card;

  // console.log(props);

  return (
    <div className="card mx-4 rounded-4" style={{width: '18rem'}}>
    <div className="card-header">
      <p className='text-center mt-2 fw-bolder text-muted'>{ props.card.type }</p>
      <h2 className="card-title text-center">{ props.card.cost }</h2>
    </div>
    <div className="card-body">
    <p className="card-text">✔ { props.card.fixed }</p>
      {
        props.features.map((feature, index) => {
          let symbol = props.card.features.includes(feature) ? '✔' : '✖' ;
          return <Feature feature={ feature } key={index} symbol={ symbol }/>
        })
      }
      <div className="d-flex justify-content-center">
        <button className='btn btn-primary rounded-pill 'style={{width: '15rem'}} disabled={type === 'FREE' || type === 'PLUS'}>BUTTON</button>
      </div>
    </div>
  </div>
  )
}

export default Card