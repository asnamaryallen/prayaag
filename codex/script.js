const schedule = document.getElementById("schedule");
const days = document.querySelectorAll(".day");

const day1 = `
  <div class="table-header">
    <div>TIME</div>
    <div>EVENT</div>
  </div>
  <div class="table-row">
    <div>9:00 AM</div>
    <div>Inauguration</div>
  </div>
  <div class="table-row">
    <div>10:00 AM – 5:00 PM</div>
    <div>MAKE-A-THON</div>
  </div>
`;

const day2 = `
  <div class="table-header">
    <div>TIME</div>
    <div>EVENT</div>
  </div>
  <div class="table-row">
    <div>9:00 AM</div>
    <div>Final Evaluation</div>
  </div>
  <div class="table-row">
    <div>2:00 PM</div>
    <div>Valedictory & Prize Distribution</div>
  </div>
`;

function showDay(day) {
  days.forEach(d => d.classList.remove("active"));
  days[day - 1].classList.add("active");
  schedule.innerHTML = day === 1 ? day1 : day2;
}

showDay(1);
