import { Row, Col, Input, Glyphicon } from 'react-bootstrap'

export default class extends React.Component {
  render() {
    const iconName    = <Glyphicon glyph='font' />;
    const iconPhone   = <Glyphicon glyph='earphone' />;
    const iconAddress = <Glyphicon glyph='home' />;

    return (
      <Input label='Company details' wrapperClassName='wrapper'>
        <Row>
          <Col xs={6}>
            <Input type='text' addonBefore={ iconName  } placeholder='Company name' />
          </Col>
          <Col xs={6}>
            <Input type='tel' addonBefore={ iconPhone } placeholder='Company phone' />
          </Col>
        </Row>
        <Input type='text' addonBefore={ iconAddress } placeholder='Company address' />
      </Input>
    )
  }
}
