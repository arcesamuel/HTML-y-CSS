let obj1={
    propObj1: 'Value 1';
};

let obj2={
    propObj2: 'Value 2';
};

let obj3={
    prop3: 'Value 1',
    ...obj1,
    ...obj2,
};

console.table(obj3)