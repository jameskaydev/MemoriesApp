interface Props {
  properties?: string[];
  hidden: boolean;
  id: string;
  message: string;
  sender: string;
  type: string;
}

function dividePrompts(originalArray: Props[]): Props[][] {
  // console.log(originalArray)
  const dividedArray: Props[][] = [];
  let currentGroup: Props[] = [];

  // console.log('--------------')
  originalArray.forEach(item => {
    // console.log('*******')
    // console.log(item?.action?.type ? 'HAS' : 'NHAS')
    // console.log(item?.action?.type)
    if ( item?.type !== "CHAT" ) {
      currentGroup.push(item)
      dividedArray.push([...currentGroup])
      currentGroup = []
    } else {
      currentGroup.push(item)
    }
  })

  // console.log(dividedArray)
  return dividedArray;
}

export default dividePrompts