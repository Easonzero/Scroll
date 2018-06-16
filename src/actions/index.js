export const SWITCH = 0;
export const AFTER_SWITCH = 1;
export const FINISH_SWITCH = 2;
export const SELECTED_QUESTION = 3;
export const SELECTED_ANIMATE_FINISH = 4;

export const switchAction = () => ({
    type : SWITCH
});

export const afterSwitchAction = () => ({
    type : AFTER_SWITCH
});

export const finishSwitchAction = () => ({
    type : FINISH_SWITCH
});

export const selectedQuestionAction = (id) => ({
    type : SELECTED_QUESTION,
    id : id
});

export const selectedAnimateFinish = () => ({
   type : SELECTED_ANIMATE_FINISH
});