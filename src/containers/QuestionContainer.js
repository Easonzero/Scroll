import { connect } from 'react-redux';
import QuestionList from '../components/QuestionList';
import {switchAction,selectedQuestionAction,selectedAnimateFinish} from "../actions";

const mapStateToProps = ({switchState}) => {
    if(switchState.current<=switchState.stageList.length){
        return ({
            hidden:switchState.qhidden,
            ...switchState.stageList[switchState.current-1]
        });
    }
    return null;
};

const mapDispatchToProps = dispatch => ({
    select : i => e => dispatch(selectedQuestionAction(i)),
    itemAniEnd : e => dispatch(selectedAnimateFinish()),
    listAniEnd : e => {dispatch(switchAction())}
});

export default connect(mapStateToProps,mapDispatchToProps)(QuestionList)