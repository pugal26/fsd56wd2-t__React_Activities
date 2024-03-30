import Card from "./Component/Card";
import './App.css' 

const App = () => {

  const data = {
    features: [
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports'
    ],
    cards: [
      {
        type: 'FREE',
        cost: '$0/month',
        fixed: 'Single User',
        features: [
          '50GB Storage',
          'Unlimited Public Projects',
          'Community Access',
        ]
      },
      {
        type: 'PLUS',
        cost: '$9/month',
        fixed: '5 Users',
        features: [
          '50GB Storage',
          'Unlimited Public Projects',
          'Community Access',
          'Unlimited Private Projects',
          'Dedicated Phone Support',
          'Free Subdomain',
        ]
      },
      {
        type: 'PRO',
        cost: '$49/month',
        fixed: 'Unlimited Users',
        features: [
          '50GB Storage',
          'Unlimited Public Projects',
          'Community Access',
          'Unlimited Private Projects',
          'Dedicated Phone Support',
          'Free Subdomain',
          'Monthly Status Reports'
        ]
      }
    ]
  };

  return (
    <div className="d-flex justify-content-center my-4">
      {
        data.cards.map((card, index) => {
          return <Card key={index} card={ card } features={ data.features }/>
        })
      }
      <style>{'body { background-color: blue }'}</style>
    </div>
  )
}

export default App;