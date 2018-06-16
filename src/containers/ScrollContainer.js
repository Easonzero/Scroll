import { connect } from 'react-redux';
import Scroll from '../components/Scroll';
import {afterSwitchAction,finishSwitchAction} from '../actions';

// stage.state :: hidden -> 0 ; show -> 1 ; showAnimate -> 2 ;
// showQuestion -> 3 ; closeQuestion -> 4 ; exit -> 5

const mapStateToProps = ({switchState}) => {
    const h = document.documentElement.clientHeight;
    const w = document.documentElement.clientWidth;
    let offsetY = 19.34*(switchState.stageList.length-switchState.current)
        + (19.34 - 64 * h / w / 10);
    let {size,img} = switchState.player;
    return ({
        hidden : switchState.hidden,
        offsetY : offsetY,
        stageList : switchState.stageList.map(stage => {
            let { bg,dyList,stList } = stage;
            let {from,delt,d} = stage.enter;
            return {
                bg,dyList,stList,
                aniStage : stage.state > 0,
                player : {
                    size,img,from,delt,d,
                    visible:stage.state > 1
                }
            };
        })
    });
};

const mapDispatchToProps = dispatch => ({
    scrollEnd : () => dispatch(afterSwitchAction()),
    aniPlayerEnd : () => dispatch(finishSwitchAction())
});

export default connect(mapStateToProps,mapDispatchToProps)(Scroll)