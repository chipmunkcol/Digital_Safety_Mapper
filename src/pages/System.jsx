// sass 모듈 해오기?
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../styles/main.css"

const System = () => {

  const [isHide, setIsHide] = useState(true)
  const params = useParams();
  console.log('params: ', params);

  const paramsCheck = () => {
    if (params?.upload || params?.analysis) {
      setIsHide(false)
    }
  }

  useEffect(() => {
    paramsCheck();
  }, [isHide])

  return (
    <>
    <div className="system">
      <div className={ isHide ? "left-panel-hide" : "left-panel" }>left panel</div>
      <div className={ isHide ? "main-components" : "main-components-panel" }>system 메인컴포넌트 부분</div>
      
    </div>
      
    </>
  )
};

export default System;
