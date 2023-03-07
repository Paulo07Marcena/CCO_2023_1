function move() {
  var left = ipt1.value;
  var right = ipt2.value;
  var toop = ipt3.value;
  var bottom = ipt4.value;

  ball.style.marginLeft = left + "px";
  ball.style.marginRight = right + "px";
  ball.style.marginTop = toop + "px";
  ball.style.marginBottom = bottom + "px";

  ipt1.value = "";
  ipt2.value = "";
  ipt3.value = "";
  ipt4.value = "";
}
