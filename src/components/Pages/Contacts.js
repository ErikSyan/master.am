import React, { Component } from 'react';

export default class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <div>Աշխատեք Master և ստացեք բարձր եկամուտ</div>
        <div>Գրանցվելու համար կապնվեք տվյալ հեռախոսահամարով</div>
        {/* <input type="tel" value="+37477386850" readOnly /> */}
        <h1>Հեռ: <a href='tel:+37477386850'>  +37477386850</a></h1>
      </div>
    );
  }
}
