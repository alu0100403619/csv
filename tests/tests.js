var assert = chai.assert;
var tabla1 = "<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>3</td>                                  <td> 2</td>                                  <td> F</td>              </tr>\n</tbody></table>";

suite('temperature', function() {
    test('3, 2, F = [3, 2, F]', function() {
        original.value = "3, 2, F";
        calculate();
        assert.deepEqual(finaltable.innerHTML, tabla1);
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