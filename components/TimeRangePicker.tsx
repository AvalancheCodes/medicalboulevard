import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import TimeRange from "../core/shared/entities/utils/TimeRange";


interface IProps {
  name?: string;

  value: TimeRange;
  onChange: (e: { target: { name?: string, value: TimeRange } }) => void;

  minStartTime?: string;
  maxStartTime?: string;

  minEndTime?: string;
  maxEndTime?: string;

  step?: number;

  required?: boolean
}

function TimeRangePicker({
                           name,
                           value,
                           onChange,
                           minStartTime,
                           maxStartTime,
                           minEndTime,
                           maxEndTime,
                           step = 60,
                           required = false
                         }: IProps) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    setStartTime(value.start);
    setEndTime(value.end);
  }, [value])

  useEffect(() => {
    let start = startTime;
    let end = endTime;
    if (start && end) {
      const startDate = new Date(`1970-01-01T${start}:00`);
      const endDate = new Date(`1970-01-01T${end}:00`);

      if (endDate.getTime() < startDate.getTime()) {
        setEndTime(startTime);
        end = start;
      }
    }

    onChange({
      target: {
        name: name,
        value: { start: start, end: end }
      }
    });
  }, [name, onChange, startTime, endTime])

  return (
    <Row>
      <Col xs={12} md={12}>
        <InputGroup className="mb-3">
          <Form.Control
            type="time"
            aria-label="Start Time"
            value={startTime}
            min={minStartTime}
            max={maxStartTime}
            step={step}
            onChange={(e) => setStartTime(e.target.value)}
            required={required}
          />
          <InputGroup.Text className="px-1">-</InputGroup.Text>
          <Form.Control
            type="time"
            aria-label="End Time"
            value={endTime}
            min={minEndTime}
            max={maxEndTime}
            step={step}
            onChange={(e) => setEndTime(e.target.value)}
            required={required}
          />
        </InputGroup>
      </Col>
    </Row>
  );
}

export default TimeRangePicker;
