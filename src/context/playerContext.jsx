//combineReducersは、複数のreducerを一つにまとめることができる
//発行されたActionにより、どのように状態を遷移させるのかを記述するのがReducer

import { createContext } from "react";

const playerContext = createContext();

export default playerContext;
