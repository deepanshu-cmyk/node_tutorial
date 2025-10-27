import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let todoList = [];

function showMenu() {
    console.log('\nTodo List Application');
    console.log('1. View Todo List');
    console.log('2. Add Todo Item');
    console.log('3. Remove Todo Item');
    console.log('4. Exit');
    rl.question('Select an option: ', (answer) => {
        handleMenuSelection(answer);
    });
}

function handleMenuSelection(option) {
    switch (option) {
        case '1':
            viewTodoList();
            break;
        case '2':
            addTodoItem();
            break;
        case '3':
            removeTodoItem();
            break;
        case '4':
            exitApplication();
            break;
        default:
            console.log('Invalid option. Please try again.');
            showMenu();
            break;
    }
}

function viewTodoList() {
    console.log('\nTodo List:');
    if (todoList.length === 0) {
        console.log('No items in the todo list.');
    } else {
        todoList.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    showMenu();
}

// ✅ Add missing function
function addTodoItem() {
    rl.question('\nEnter a new todo item: ', (item) => {
        if (item.trim() === '') {
            console.log('Item cannot be empty.');
        } else {
            todoList.push(item.trim());
            console.log(`"${item}" added to the list.`);
        }
        showMenu();
    });
}

// ✅ Add missing function
function removeTodoItem() {
    if (todoList.length === 0) {
        console.log('\nNo items to remove.');
        return showMenu();
    }

    console.log('\nSelect an item number to remove:');
    todoList.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });

    rl.question('\nEnter number: ', (num) => {
        const index = parseInt(num) - 1;
        if (isNaN(index) || index < 0 || index >= todoList.length) {
            console.log('Invalid number.');
        } else {
            console.log(`"${todoList[index]}" removed.`);
            todoList.splice(index, 1);
        }
        showMenu();
    });
}

// ✅ Add missing function
function exitApplication() {
    console.log('\nGoodbye!');
    rl.close();
}

showMenu();
