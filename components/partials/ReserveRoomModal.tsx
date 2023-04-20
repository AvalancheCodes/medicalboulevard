import { useCallback, useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from 'react-bootstrap/Modal'
import ImageLoader from '../ImageLoader'
import TimeRangePicker from "../TimeRangePicker";
import IRoomEntity from "../../core/shared/entities/IRoomEntity";
import RecurringType from "../../core/shared/entities/enums/RecurringType";
import { RECURRING_OPTIONS } from "../../utils/constants";
import moment from "moment";
import _ from "lodash";
import Alert from "react-bootstrap/Alert";
import { apiReserveRoomService } from "../../core/client/services/api";
import { EntityWithId } from "../../core/shared/entities/utils/EntityWithId";

interface IProps extends Omit<ModalProps, "size"> {
  room: EntityWithId<IRoomEntity>
  onAfterSubmit: () => void;

  [key: string]: any;
}

const ReserveRoomModal = ({ room, onAfterSubmit, ...props }: IProps) => {
  const [formData, setFormData] = useState({
    startDay: "",
    timeRange: { start: "", end: "" },
    repeat: RecurringType.None,
    endRepeatType: "",
    endRepeatDate: "",
    endRepeatTimes: 0,
    name: "",
    phone: "",
    email: ""
  });

  const [errorText, setErrorText] = useState<string | null>(null);
  // Form validation
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()
    event.stopPropagation()

    setErrorText(null);
    setIsSubmitDisabled(true);

    const form = event.currentTarget;

    try {
      if (form.checkValidity() === false) throw new Error("Invalid input");
      await apiReserveRoomService.PostReserveRoomRequest({
        roomId: room._id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        startDay: formData.startDay,
        timeRange: formData.timeRange,
        repeat: formData.repeat,
        endRepeatDate: formData.endRepeatDate,
        endRepeatTimes: formData.endRepeatTimes
      })
      onAfterSubmit();
    } catch (e) {
      setErrorText(e.message)
    } finally {
      setIsSubmitDisabled(false);
    }
  }, [onAfterSubmit, formData, room._id]);

  const handleChange = useCallback((e) => {
    setFormData(curr => ({
      ...curr,
      [e.target.name]: e.target.value
    }));
  }, []);

  useEffect(() => {
    const cloned = { ...formData };
    if (cloned.repeat === RecurringType.None) {
      cloned.endRepeatType = "";
      cloned.endRepeatDate = "";
      cloned.endRepeatTimes = 0;
    }
    if (cloned.endRepeatType !== "on-date") {
      cloned.endRepeatDate = "";
    }
    if (cloned.endRepeatType !== "after-times") {
      cloned.endRepeatTimes = 0;
    }

    setFormData(curr => {
      return _.isEqual(curr, cloned) ? curr : cloned;
    })
  }, [formData])

  return (
    <Modal size="xl" {...props}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            Room Availability and Calculator
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row>
            <Col xs={12} md={6}>

              <ImageLoader
                src={room.mainImageUrl}
                width={800}
                height={600}
                alt={room.name}
              />
            </Col>
            <Col xs={12} md={6}>

              <Row className="mb-0">
                <Form.Label>
                  <h3 className="h5">Select Day</h3>
                </Form.Label>
                <Col xs={12} md={12} lg={12} xl={6}>
                  <Form.Label>First Day</Form.Label>
                  <Form.Control
                    name="startDay"
                    type="date"
                    value={formData.startDay}
                    onChange={handleChange}
                    required
                    placeholder="Select a Start Day"
                  />
                </Col>
                <Col xs={12} md={12} lg={12} xl={6}>
                  <Form.Label>Hours</Form.Label>
                  <TimeRangePicker
                    name="timeRange"
                    value={formData.timeRange}
                    onChange={handleChange}
                    minStartTime={"7:00"}
                    maxStartTime={"19:45"}
                    maxEndTime={"20:00"}
                    required={true}
                  />
                  <p className="text-end">
                    {/* TODO: Add calculations */}
                    {4} hours total
                  </p>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col xs={12} md={6}>
                  <Form.Label>Repeat</Form.Label>
                  {RECURRING_OPTIONS.map(item => (
                    <Form.Check
                      type='radio'
                      key={item.id}
                      id={item.id}
                      name='repeat'
                      label={item.label}
                      value={item.id}
                      checked={item.id === formData.repeat}
                      onChange={handleChange}
                    />
                  ))}
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>End Repeat</Form.Label>
                  <Row className='justify-content-between'>
                    <Col xs={'auto'} className="d-flex pe-0">
                      <Form.Check
                        className="my-auto"
                        type='radio'
                        id="on-date"
                        name='endRepeatType'
                        value="on-date"
                        checked={formData.endRepeatType === "on-date"}
                        onChange={handleChange}
                        label="On Date"
                        disabled={formData.repeat === RecurringType.None}
                        required
                      />
                    </Col>
                    <Col xs={'auto'} className="d-flex">
                      <Form.Control
                        style={{ width: "18ch" }}
                        className="my-auto"
                        type="date"
                        size="sm"
                        name="endRepeatDate"
                        value={formData.endRepeatDate}
                        onChange={handleChange}
                        placeholder="Select last day"
                        disabled={formData.endRepeatType !== "on-date" || formData.repeat === RecurringType.None}
                        min={moment().format("YYYY-MM-DD")}
                        required={formData.endRepeatType === "on-date"}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2 justify-content-between">
                    <Col xs={'auto'} className="d-flex pe-0">
                      <Form.Check
                        className="my-auto"
                        type="radio"
                        id="after-times"
                        name="endRepeatType"
                        value="after-times"
                        checked={formData.endRepeatType === "after-times"}
                        onChange={handleChange}
                        label="After"
                        disabled={formData.repeat === RecurringType.None}
                        required
                      />
                    </Col>
                    <Col xs={'auto'} className="d-flex">
                      <Form.Control
                        style={{ paddingLeft: "0.7rem", width: "7ch" }}
                        className="my-auto"
                        type="number"
                        size="sm"
                        name="endRepeatTimes"
                        value={formData.endRepeatTimes}
                        onChange={handleChange}
                        placeholder=''
                        disabled={formData.endRepeatType !== "after-times" || formData.repeat === RecurringType.None}
                        min={1}
                        max={100}
                        required={formData.endRepeatType === "after-times"}
                      />
                      <span className="my-auto">&nbsp;times</span>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mb-0">
                <Form.Label>
                  <h3 className="h5">Contact Info</h3>
                </Form.Label>
                <Col xs={12} md={6} className="mb-2">
                  <Form.Control
                    aria-label="Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                  />
                </Col>
                <Col xs={12} md={6} className="mb-2">
                  <Form.Control
                    aria-label="Phone"
                    name="phone"
                    type="tel"
                    pattern="^\+[1-9]\d{1,14}$"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone (+14155552671)"
                  />
                </Col>
                <Col xs={12} className="mb-2">
                  <Form.Control
                    aria-label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                  />
                </Col>
              </Row>

            </Col>
          </Row>


          {errorText && (<Alert variant="danger">{errorText}</Alert>)}

        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" disabled={isSubmitDisabled}>Reserve</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ReserveRoomModal;
