interface Props {
  properties?: string[];
  hidden: boolean;
  id: string;
  message: string;
  sender: string;
  type: string;
  index?: number;
  sent?: boolean;
}

function dividePrompts(originalArray: Props[]): Props[][] {
  const dividedArray: Props[][] = [];
  let currentGroup: Props[] = [];

  originalArray.forEach(item => {
    if ( item?.type !== "CHAT" ) {
      currentGroup.push(item)
      dividedArray.push([...currentGroup])
      currentGroup = []
    } else {
      currentGroup.push(item)
    }
  })

  dividedArray.forEach(item => {
    item.forEach((i, index) => {
      i.sent = false;
      i.index = index;
    })
  })

  return dividedArray;
}

export default dividePrompts