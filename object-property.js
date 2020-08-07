const students = [
    {id: 21, name: 'omor sani'},
    {id: 31, name: 'Maannaaa'},
    {id: 41, name: 'mousumi'},
    {id: 71, name: 'deepjol'}

]

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigIds = students.filter(s => s.id>40);
const bigId = students.find(s => s.id>40);

console.log(bigId);