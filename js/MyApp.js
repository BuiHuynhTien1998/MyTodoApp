function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function noAllowDrop(ev) {
  ev.stopPropagation();
}
function dropDelete(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  document.getElementById(data).remove();
}

var idnumber = 5;
$("#addWork").click(function (event) {
  idnumber = idnumber + 1;
  work = `<div id="drag${idnumber}" class="items" draggable="true" ondragstart="drag(event)">
  <textarea     class="bg-dark text-light" name="" id="" cols="30" rows="1" ondrop="noAllowDrop(event)">
  </textarea>
  </div>`;
  $(work).hide().appendTo("#workContainer").fadeIn(1000);
});

$("#addntd").click(function (event) {
  idnumber = idnumber + 1;
  work = `<div id="drag${idnumber}" class="items" draggable="true" ondragstart="drag(event)">
    <textarea     class="bg-dark text-light" name="" id="" cols="30" rows="1" ondrop="noAllowDrop(event)">
    </textarea>
    </div>`;
  $(work).hide().appendTo("#ntdContainer").fadeIn(1000);
});

var tableid = 3;
$("#addrow").click(function (event) {
  tableid = tableid + 1;
  row = `<tr>
  <th scope="row">
    <textarea
    
      name=""
      id=""
      cols="1"
      rows="1"
      class="font-weight-bold"
    >
from - to</textarea
    >
  </th>
  <td><textarea name="" id="" cols="1" rows="1"></textarea></td>
  <td>
    <textarea name="" id="" cols="1" rows="1"></textarea>
  </td>
  <td><textarea name="" id="" cols="1" rows="1"></textarea></td>
  <td><textarea name="" id="" cols="1" rows="1"></textarea></td>
  <td>
    <textarea name="" id="" cols="1" rows="1"></textarea>
  </td>
  <td>
    <textarea name="" id="" cols="1" rows="1"></textarea>
  </td>
  <td><textarea name="" id="" cols="1" rows="1"></textarea></td>
</tr>`;

  $(row).hide().appendTo("#tbodyContainer").fadeIn(1000);
});

$("#deleterow").click(function () {
  if (tableid > 0) {
    $("#tbodyContainer tr:last").remove();
    tableid = tableid - 1;
  }
});

function loadChart() {
  Highcharts.chart("container", {
    data: {
      table: "datatable",
    },
    chart: {
      type: "spline",
    },
    title: {
      text: "Data extracted from a HTML table in the page",
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: "Grades",
      },
      max: 10,
    },
    tooltip: {
      formatter: function () {
        return "<b>" + this.series.name + "</b><br/>" + this.point.y + " ";
      },
    },
  });
}
$(".popuptext").hide();
$(document).ready(function () {
  loadChart();

  $(".change").click(function (e) {
    var pos = $(this).offset();
    clicked = $(this);
    $(".popuptext").css({ left: pos.left - 265, top: pos.top - 100 });
    $(".popuptext").children("input").val($(this).text());
    $(".popuptext").fadeIn();

    e.preventDefault();
  });

  $(".popuptext").change(function (e) {
    clicked.html($("#changeVal").val());
    loadChart();
    $(".popuptext").fadeOut();
    e.preventDefault();
  });

  $(function () {
    $("input").keydown(function () {
      if (
        !$(this).val() ||
        (parseInt($(this).val()) <= 10 && parseInt($(this).val()) >= 0)
      )
        $(this).data("old", $(this).val());
    });
    $("input").keyup(function () {
      if (
        !$(this).val() ||
        (parseInt($(this).val()) <= 10 && parseInt($(this).val()) >= 0)
      );
      else $(this).val($(this).data("old"));
    });
  });

  $(document).mouseup(function (e) {
    var container = $(".popuptext");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
    }
  });
});

$("#toggleHideNav").click(function (event) {
  $("#nav1").toggle(800);
});
