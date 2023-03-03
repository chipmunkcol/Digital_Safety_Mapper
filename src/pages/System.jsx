import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { _testState } from "../recoil/common/testState";
import "../styles/main.css"

const System = () => {

  const [number, setNumber] = useRecoilState(_testState)
  console.log('number: ', number);
  const setRecoilNumber = () => {
    setNumber(number)
  }

  return (
    <div className="system">
      recoil test입니다~
      <div> { number } </div>
      <button 
      style={{backgroundColor:'teal'}}
      onClick={setRecoilNumber}>select + 버튼</button>
    </div>
  )
};

export default System;
