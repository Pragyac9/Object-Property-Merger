function merge() {
    var obj1 = document.getElementById('user1').value;
    var obj2 = document.getElementById('user2').value;

    var arr = JSON.parse(obj1);
    var array = JSON.parse(obj2);

    const merged = { ...arr, ...array };

    document.getElementById('result').innerHTML = JSON.stringify(merged, null, 2);
}
