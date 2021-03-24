x1var fname = [];
let lname = [];
let username = [];
let password = [];
let tasks = [];
let answers = [];
let block = [];
let date = [];
let x = [];
let now = new Date();

setInterval(function () {
    now = new Date();
}, 6000);

$(document).on('click', '.signup', function() {
    let submitted = true;
    let today = new Date;
    $("#wrong").html("<li>wrong action</li>");
    for (var i = 0; i < usname.length; i++) {
        if (username[i] === $("#usname").val()) {
            $("#wrong").append("<li>THAT'S USER HAS EXIST</li>");
            submitted = false;
        }
    }
    if ($("#pwd").val() !== $("#psw-repeat").val() || !$("#pwd").val()) {
        $("#wrong").append("<li>WRONG PASSWORD</li>");
        submitted = false;
    }
    if ($("#pwd").val().length < 8) {
        $("#wrong").append("<li>SHORT PASSWORD</li>");
        submitted = false;
    }
    if (!submitted) {
        return 0;
    }
    fname.push($("#fname").val());
    lname.push($("#lname").val());
    username.push($("#usname").val());
    password.push($("#pwd").val());
    tasks.push($("#task").val());
    answers.push($("#answer").val());
    date.push(today);
    block.push(1);
    x.push(0);
    $("fieldset").hide();
    $("body").append("<h1 id='reg'>REGISTER COMPLETED</h1>");
}),
    $(document).on('click', '.signin', function() {
        let subm = true;
        $("#wrong").html("<li>WRONG ACTION</li>");
        for (let i = 0; i < username.length; i++) {
            if (username[i] === $(".user").val()) {
                if (password[i] === $(".pass").val() && block[i]) {
                    $("fieldset").hide();
                    $("body").append("<h1 id='reg'>Good day " + lname[i] + " " + fname[i] + "</h1>");
                    if ((now - date[i]) > 20000) {
                        date[i] = new Date();
                        let pass = prompt('YOU PASSWORD IS INCORRECT');
                        password[i] = pass;
                    }
                    $(".sin, .sup").hide();
                    $("header").append('<a class="sout">EXIT</a>');
                    return 0;
                } else if (x[i] >= 3 || !block[i]) {
                    alert("YOUR ACCOUNT HAS BLOCKED");
                    let t = confirm("REESTABLISH YOUR ACCOUNT?");
                    if (t) {
                        block[i] = 1;
                        x[i] = 0;
                        $("#wrong").html("");
                        $("#wrong").append("<li id=gr>YOUR ACCOUNT HAS REESTABLISHED</li>");
                        forgot()
                    };
                }
                else {
                    x[i]++;
                    subm = false;
                }
                break;
            }
        }
        $("#wrong").append("<li>UNKNOWN LOGIN OR PASSWORD</li>");
    }),

    $(document).on('click', '.forgot', function() {
        forgot();
    }),
    $(document).on('click', '.sin, .sout', function() {
        $("fieldset, .sin, .sup").show();
        $("h1, .sout").remove();
        $("h2").text("SING IN");
        $("fieldset").html('<legend>INFORMATION</legend>' +
            '<label>LOGIN:</label>' +
            '<input id="username"><br><br>' +
            '<label>PASSWORD:</label>' +
            '<input type="password" id="password"><br><br>' +
            '<div><input class="signin" type="submit" value="SING IN">' +
            '<input class="forgot" type="submit" value="RESET PASSWORD"></div>' +
            '<ul class="wrong"></ul>');
    }),

    $(document).on('click', '.sup', function() {
        $("fieldset").show();
        $("h1").remove();
        $("h2").text("REGISTRATION");
        $("fieldset").html('<legend>INFORMATION</legend>' +
            '<label>NAME:</label>' +
            '<input type="text" id="fname"><br><br>' +
            '<label>SURNAME:</label>' +
            '<input type="text" id="lname"><br><br>' +
            '<label>LOGIN:</label>' +
            '<input class="user"><br><br>' +
            '<label>PASSWORD:</label>' +
            '<input type="password" class="psw"><br><br>' +
            '<label>CONFIRM PASSWORD:</label>' +
            '<input type="password" id="psw-repeat"><br><br>' +
            '<label>SECRET QUESTION:</label>' +
            '<input type="text" id="task"><br><br>' +
            '<label>ANSWER:</label>' +
            '<input type="text" id="answer"><br><br>' +
            '<div><input class="signup" type="submit" value="REGISTRATION"></div>' +
            '<ul class="wrong"></ul>');
    });

var forgot = function() {
    let login = prompt('ENTER LOGIN')
    let inx = username.indexOf(login)
    let contr_answer = prompt(tsk[inx]);
    if (contr_answer === answers[inx]) {
        var pass = prompt('PUT NEW PASSWORD');
        alert('PASSWORD REFRESHED')
    }
    else {
        alert('WRONG ANSWER');
    }
    password[inx] = pass;
}
