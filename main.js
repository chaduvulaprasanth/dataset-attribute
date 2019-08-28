const el = document.querySelector('#user');

el.id == 'user';
el.dataset.id = '1234567890';
el.dataset.id = "456";
// result of date of birth
el.dataset.dateOfBirth === ''

// set the data attribute
el.dataset.dateOfBirth = '28-07-1998';
// Result: el.dataset.dateOfBirth === 1960-10-03

delete el.dataset.dateOfBirth;
// // Result: el.dataset.dateOfBirth === undefined

'someDataAttr' in el.dataset === false
el.dataset.someDataAttr = 'mydata';
// Result: 'someDataAttr' in el.dataset === true