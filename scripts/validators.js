const titlerule = /^\S(?:.*\S)?$/;
export function isValidTitle(text){
    return titlerule.test(text);
}
const duedaterule = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
export function isValidDueDate(date){
    return duedaterule.test(date);
}

const durationrule =/^(0|[1-9]\d*)(\.\d{1,2})?$/;
export function isValidDuration(text){
      return durationrule.test(text);
}
const tagrule =/^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
export function isValidTag(text){
      return tagrule.test(text);
}

const repeateRule = /\b(\w+)\s+\1\b/;
export function hasRepeatedWord(text){
    return repeateRule.test(text);
}

