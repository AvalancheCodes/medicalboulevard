import React, { useMemo } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { RecurringType } from "../utils/RecurringType";
import { CART_LINE_ITEMS } from "../utils/dummy";
import currencyFormatter from "../utils/currencyFormatter";
import moment from "moment";

const CartLineItem = ({
                        title,
                        price,
                        recurringType,
                        dateStart,
                        hoursStart,
                        hoursEnd,

                        endRepeatDate, // either
                        endRepeatTimes, // either

                        className
                      }) => {

  const priceFormatted = useMemo(() => {
    return currencyFormatter.format(price);
  }, [price])

  const recurringLine = useMemo(() => {
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = moment(dateStart); //"2015-07-02"
    const dow = dayOfWeek[date.day()];

    switch (recurringType) {
      case RecurringType.None:
        return 'None!';
      case RecurringType.EveryDay:
        return `Daily, ${hoursStart} - ${hoursEnd}`;
      case RecurringType.EveryWeek:
        return `Weekly, ${dow}, ${hoursStart} - ${hoursEnd}`;
      case RecurringType.EveryMonth:
        return `Monthly, ${hoursStart} - ${hoursEnd}`;
      default:
        console.warn(`Unknown RecurringType: '${recurringType}'!`);
        return "ERR";
    }
  }, [])

  const dateStartFormatted = useMemo(() => {
    if (!recurringType) {
      console.warn("recurringType is undefined!");
      return "";
    }
    if (recurringType === 'none') {
      return `${dateStart} ${hoursStart}`
    }

    return dateStart;
  }, [dateStart, recurringType])

  const dateEndFormatted = useMemo(() => {
    switch (recurringType) {
      case RecurringType.None:
        return `${dateStart} ${hoursEnd}`
      case RecurringType.EveryDay:
        return "not implemented";
      case RecurringType.EveryWeek:
        return "not implemented";
      case RecurringType.EveryMonth:
        return "not implemented";
      default:
        console.warn(`Unknown RecurringType: '${recurringType}'!`);
        return "ERR";
    }
  }, [dateStart, hoursEnd, recurringType])

  const totalHours = useMemo(() => {
    return "not implemented";
  }, [])

  return (
    <div className={className}>
      <div className={'d-flex justify-content-between align-items-center'}>
        <h1 className={'h6 my-0'}>{title}</h1>
        <h2 className={'h6 my-0'}>{priceFormatted}</h2>
      </div>
      <div>
        <p className='my-0'>Total hours: {totalHours}</p>
        <p className='my-0'>Recurring: {recurringLine}</p>
        <p className='my-0'>Date Start: {dateStartFormatted}</p>
        <p className='my-0'>Date End: {dateEndFormatted}</p>
      </div>
    </div>
  )
}

const Cart = () => {
  const lineItems = CART_LINE_ITEMS;
  const subtotal = useMemo(() => {
    return currencyFormatter.format(5000);
  }, [])
  const total = useMemo(() => {
    return currencyFormatter.format(5000);
  }, [])

  const coupon = "123456";
  const couponDiscount = useMemo(() => {
    return currencyFormatter.format(-123);
  }, [])

  const payableTotal = useMemo(() => {
    return currencyFormatter.format(5000);
  }, [])

  return (
    <Card>
      <Card.Header>
        <div className={'d-flex justify-content-between align-items-center'}>
          <h1 className={'h6 mb-0 d-inline'}>Reservation Summary</h1>
          <Button variant='outline-secondary'>...</Button>
        </div>
      </Card.Header>
      <Card.Body style={{
        maxHeight: '400px',
        overflowY: 'auto'
      }}>
        {lineItems && lineItems.map((x, i) => (
          <CartLineItem
            key={i}
            className={'py-2'}
            title={x.title}
            price={x.price}
            dateStart={x.dateStart}
            hoursStart={x.hoursStart}
            hoursEnd={x.hoursEnd}
            recurringType={x.recurringType}
            endRepeatTimes={x.endRepeatTimes}
            endRepeatDate={x.endRepeatDate}
          />
        ))}
      </Card.Body>
      <Card.Footer>
        <h2 className={'h6 d-flex justify-content-between my-2 mt-0'}>
          <span>Subtotal</span>
          <span>{subtotal}</span>
        </h2>
        <hr/>
        <h2 className={'h6 d-flex justify-content-between my-2'}>
          <span>Total</span>
          <span>{total}</span>
        </h2>
        <hr/>
        {coupon && (
          <h2 className={'h6 d-flex justify-content-between my-2'}>
            <span>Coupon: <span>{coupon}</span></span>
            <span>{couponDiscount}</span>
          </h2>
        )}
        <hr/>
        <h2 className={'h6 d-flex justify-content-between my-2 mb-0'}>
          <span>Payable Total</span>
          <span>{payableTotal}</span>
        </h2>
      </Card.Footer>
    </Card>
  )
}

export default Cart
