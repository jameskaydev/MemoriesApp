interface Action {
  properties?: string[];
  type: string;
}

interface Props {
  action?: Action;
  hidden: boolean;
  id: string;
  message: string;
  sender: string;
  type: string;
}

const dividePrompts = (props: Props[]) => {
  const mainArray = <Props[][]>[];
  const newArray = <Props[]>[];
  props.forEach((item, index) => {
    if ( item.action ) {
      newArray.push(item);
      const aa = [...newArray];
      mainArray.push(aa);
      // console.log(mainArray)
      newArray.splice(0)
      // if ( index === props.length-1 ) {
      //   console.log(mainArray)
      // }
    } else {
      newArray.push(item);
    } 
  })

  return mainArray;
  // console.log(mainArray)
}

export default dividePrompts