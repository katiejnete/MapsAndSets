// q1
// {1,2,3,4}

// q2
// 'ref'

// q3
// Map {Array(3) => true, Array(3) => false}

// hasDuplicate
const hasDuplicate = arr => new Set (arr).size !== arr.length;

// vowelCount
const vowelCount = str => {
    const strArr = [...str.toLowerCase()];
    const vowels = 'aeiou';
    const vowelObj = strArr.filter(char => vowels.includes(char)).reduce((vowel,next) => {
        if (vowel[next]) vowel[next]++;
        else vowel[next] = 1;
        return vowel;
    },{});
    const vowelArr = [...Object.entries(vowelObj)];
    vowelArr;
    const vowelMap = new Map (vowelArr);
    return vowelMap; 
};