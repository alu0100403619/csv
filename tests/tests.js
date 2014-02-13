var assert = chai.assert;
var tabla1 = '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>3</td>                                  <td> 2</td>                                  <td> F</td>              </tr>\n</tbody></table>';
var tabla2 = '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>4</td>                                  <td> 5</td>                                  <td> C 6</td>                                  <td> 7</td>                                  <td> D</td>              </tr>\n</tbody></table>';

suite('csv', function() {
    test('3, 2, F = [3, 2, F]', function() {
        original.value = "3, 2, F";
        calculate();
        assert.deepEqual(finaltable.innerHTML, tabla1);
    });
     test('4, 5, C \n 6, 7, D = [[4, 5, C], [6, 7, D]]', function() {
         original.value = "4, 5, C\n 6, 7, D";
         calculate();
         assert.deepEqual(finaltable.innerHTML, tabla2);
     });
     test('5, X \n 6, Y, Z es una tabla', function() {
         original.value = "5, X\n 6, Y, Z";
         calculate();
         assert.match(finaltable.innerHTML, /table/);
     });
});