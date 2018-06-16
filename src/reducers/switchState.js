import {SWITCH,AFTER_SWITCH,FINISH_SWITCH,SELECTED_QUESTION,SELECTED_ANIMATE_FINISH} from "../actions"
import init from '../data/switch_init';

// stage.state :: hidden -> 0 ; show -> 1 ; showAnimate -> 2 ;
// showQuestion -> 3 ; closeQuestion -> 4 ; exit -> 5

const switchState= (state = init, action) => {
    switch (action.type) {
        case SWITCH:
            if(state.current>state.stageList.length ||
                state.stageList[state.current-1].state!==5){
                return state;
            }

            if(state.current<state.stageList.length){
                state.stageList[state.current++-1].state++;
                state.stageList[state.current-1].state++;
            }else if(state.current===state.stageList.length)
                state.hidden = true;

            return {...state};
        case AFTER_SWITCH:
            if(state.stageList[state.current-1].state!==1)
                return state;

            state.stageList[state.current-1].state++;
            console.log("切换场景成功");
            console.log("人物动画");
            return {...state};
        case FINISH_SWITCH:
            if(state.stageList[state.current-1].state!==2)
                return state;

            console.log("场景内部展示完毕");
            console.log("弹出问题");
            state.qhidden = false;
            state.stageList[state.current-1].state++;
            return {...state};
        case SELECTED_QUESTION:
            if(state.stageList[state.current-1].state!==3)
                return state;

            console.log("选中动画");
            state.stageList[state.current-1].selected = action.id;
            state.stageList[state.current-1].state++;
            return {...state};
        case SELECTED_ANIMATE_FINISH:
            if(state.stageList[state.current-1].state!==4)
                return state;

            console.log("弹窗关闭");
            state.qhidden = true;
            state.stageList[state.current-1].state++;
            return {...state};
        default:
            return state;
    }
};

export default switchState;