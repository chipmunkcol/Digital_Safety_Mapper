import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { leftpanelState } from "../../recoil/common/leftpanelState";

const LeftPanel = () => {

    const params = useLocation().pathname;
    console.log('params: ', params);

    const [isHide, setIsHide] = useRecoilState(leftpanelState);
  
    const leftpanelHandler = () => {
        if(params !== '/') {
            setIsHide(false)
        } else {
            setIsHide(true)
        }
    }
  
    useEffect(() => {
      leftpanelHandler();
    },[params])

    return(
    <>
        <div className={isHide ? "leftpanel-hide" : "leftpanel"}>
            <span>left panel 입니다~</span>
        </div>
    </>
    )
}

export default LeftPanel;