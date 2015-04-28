import { Input } from 'react-bootstrap'

import Delivery from '../../../models/delivery'

export default class DeliveryInput extends React.Component {
  constructor(props) {
    super(props);
    this.deliveries = props.deliveries.map(deliveryJson => Delivery.buildFromJson(deliveryJson))
  }

  render() {
    return (
      <Input type='select' label='Delivery option'>
        { this.deliveries.map(delivery => <option value={ delivery.id } key={ delivery.name } >{ `${delivery.name}: ${delivery.description}` }</option>) }
      </Input>
    )
  }
}

DeliveryInput.propTypes = { deliveries: React.PropTypes.array };
