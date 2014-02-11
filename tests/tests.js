var assert = chai.assert;

suite('temperature', function() {
    test('3, 2, F = [3, 2, F]', function() {
        original.value = "3, 2, F";
        calculate();
        assert.deepEqual(finaltable.innerHTML, "[3, 2, F]");
    });
//     test('45C = 113.0 Farenheit', function() {
//         original.value = "45C";
//         calculate();
//         assert.deepEqual(finaltable.innerHTML, "113 Grados Farenheit");
//     });
//     test('5X = error', function() {
//         original.value = "5X";
//         calculate();
//         assert.match(finaltable.innerHTML, /ERROR/);
//     });
});