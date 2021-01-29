export const TOGGLE_FAVORITE='TOGGLE_FAVORITE';

export const toggleFaorite=(id)=>{
    return {type:TOGGLE_FAVORITE , mealId:id}
}