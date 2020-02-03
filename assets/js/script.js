function initPage() {
    const currentHour = parseInt(moment().format("kk"));
    console.log(currentHour);
    const currentDayEl = document.getElementById("currentDay");
    currentDayEl.innerHTML = moment().format("dddd, MMMM Do YYYY");

    const emptyPlan = [
        {
            "time": 9,
            "note": ""
        },
        {
            "time": 10,
            "note": ""
        },
        {
            "time": 11,
            "note": ""
        },
        {
            "time": 12,
            "note": ""
        },
        {
            "time": 13,
            "note": ""
        },
        {
            "time": 14,
            "note": ""
        },
        {
            "time": 15,
            "note": ""
        },
        {
            "time": 16,
            "note": ""
        },
        {
            "time": 17,
            "note": ""
        }
    ];

    const dayPlan = JSON.parse(localStorage.getItem("plan")) || emptyPlan;
    const timeblockContainer = document.getElementById("timeblock-container");
    timeblockContainer.innerHTML = "";

    // const inputEl9AM = document.getElementById("9AMinput");
    // const inputEl10AM = document.getElementById("10AMinput");
    // const inputEl11AM = document.getElementById("11AMinput");
    // const inputEl12PM = document.getElementById("12PMinput");
    // const inputEl1PM = document.getElementById("1PMinput");
    // const inputEl2PM = document.getElementById("2PMinput");
    // const inputEl3PM = document.getElementById("3PMinput");
    // const inputEl4PM = document.getElementById("4PMinput");
    // const inputEl5PM = document.getElementById("5PMinput");

    // const saveEl9AM = document.getElementById("9AMsave");
    // const saveEl10AM = document.getElementById("10AMsave");
    // const saveEl11AM = document.getElementById("11AMsave");
    // const saveEl12PM = document.getElementById("12PMsave");
    // const saveEl1PM = document.getElementById("1PMsave");
    // const saveEl2PM = document.getElementById("2PMsave");
    // const saveEl3PM = document.getElementById("3PMsave");
    // const saveEl4PM = document.getElementById("4PMsave");
    // const saveEl5PM = document.getElementById("5PMsave");

    // <div class="row input-group time-block">
    //     <div class="input-group-prepend">
    //       <span class="input-group-text hour">2 PM</span>
    //     </div>
    //     <input type="text" class="form-control description" id="2PMinput">
    //     <div class="input-group-append">
    //       <span class="saveBtn" id="2PMsave"><i class="fas fa-save"></i></span>
    //     </div>
    //   </div>

    for (let i=0; i<dayPlan.length; i++) {
        let hourString;
        const hour = 9 + i;
        if (hour<12) {
            hourString = `${hour} AM`;
        } else if (hour === 12) {
            hourString = `${hour} PM`;
        } else {
            hourString = `${hour - 12} PM`
        }
        const timeBlock = document.createElement("div");
        timeBlock.setAttribute("class", "row input-group time-block");
        timeblockContainer.append(timeBlock);

        const timeContainer = document.createElement("div");
        timeContainer.setAttribute("class", "input-group-prepend");
        timeBlock.append(timeContainer);

        const timeSpan = document.createElement("span");
        timeSpan.setAttribute("class", "input-group-text hour");
        timeSpan.innerHTML = hourString;
        timeContainer.append(timeSpan);

        const noteEl = document.createElement("input");
        noteEl.setAttribute("type", "text");
        noteEl.setAttribute("class", "form-control description");
        noteEl.setAttribute("placeholder", dayPlan[i].note);
        timeBlock.append(noteEl);

        const saveContainer = document.createElement("div");
        saveContainer.setAttribute("class", "input-group-append");
        timeBlock.append(saveContainer);

        const saveSpan = document.createElement("span");
        saveSpan.setAttribute("class", "saveBtn");
        saveContainer.append(saveSpan);

        // localStorage.setItem("search",JSON.stringify(searchHistory));

        const saveIcon = document.createElement("i");
        saveIcon.setAttribute("class", "fas fa-save");
        saveIcon.addEventListener("click", () => {
            dayPlan[i].note = noteEl.value;
            console.log(dayPlan);
            localStorage.setItem("plan", JSON.stringify(dayPlan));
        });
        saveSpan.append(saveIcon);
    }
}

initPage();