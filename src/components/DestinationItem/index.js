import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="destiny-image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
