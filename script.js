
const array=[
    
];
// ['qwerty', 'husan', 'asdf']
//add, Husan
while (true) {
    let name = prompt('Enter command: ');
    let cmd = name.split(', ');
    if (cmd[0]=='add') {
    array.push(cmd[1])
        
    }else if (cmd[0]=='del') {
        let index = array.indexOf(cmd[1]); // массивда берилган элементни инкеснини топади
        array.splice(index, 1);
    }else if (cmd[0]=='stop') {
        break;
    }
    console.log(array);
}
console.log(array);
