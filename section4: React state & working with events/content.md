### useState
  - const [ state, useState ] = useState(value);
  - khi làm việc với state phụ thuộc vào state trước đó: 

    + setState((preState) => { return {..preState, value: value} });