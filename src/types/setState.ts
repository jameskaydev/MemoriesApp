import { Dispatch, SetStateAction} from "react";

type setStateType<T> = Dispatch<SetStateAction<T>>

export default setStateType;