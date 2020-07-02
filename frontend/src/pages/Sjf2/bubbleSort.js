var process = [1, 34, 2, 5, 13, 3, 21, 8];
console.log(process);
function bubbleSort(array) {
    for (let last = array.length - 1; last > 0; last--) {
        for (let i = 0; i < last; i++) {
            if (array[i] > array[i + 1]) {
                let help = array[i + 1];
                array[i + 1] = array[i];
                array[i] = help;
                help = 0;
            }
        }
    }
    return array;
}
var order = bubbleSort(process);
console.log(order);