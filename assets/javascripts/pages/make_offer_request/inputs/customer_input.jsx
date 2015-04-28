import { Row, Col, Input, Glyphicon } from 'react-bootstrap'

export default class extends React.Component {
  render() {
    const iconName  = <Glyphicon glyph='user' />;
    const iconEmail = <Glyphicon glyph='envelope' />;

    return (
      <Input label='Customer details' wrapperClassName='wrapper'>
        <Row>
          <Col xs={6}>
            <Input type='text' addonBefore={ iconName  } placeholder='Customer name' />
          </Col>
          <Col xs={6}>
            <Input type='text' addonBefore={ iconEmail } placeholder='Customer email' />
          </Col>
        </Row>
      </Input>
    )
  }
}
