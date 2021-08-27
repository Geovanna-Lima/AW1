/* Level 1 */
function init(robot) {
    // your code goes here
}

function loop(robot) {
    robot.action = {
        type: 'move',
        amount: 50
    }
}

/* Level 2 */
function init(robot) {
    // your code goes here
}

function loop(robot) {
    robot.action = {
        type: 'move',
        amount: 50
    }
}

/* Level 3 */
function init(robot) {
    robot.jump = true;
}

function loop(robot) {
    if (robot.jump) {
        robot.action = {
            type: 'jump',
            amount: 10
        }
        robot.jump = false;

    } else {
        robot.action = {
            type: 'move',
            amount: 50
        };
        robot.jump = true;
    }
}

/* Level 4 */
function init(robot) {
    // your code goes here
}

function loop(robot) {
    robot.action = {
        type: 'move',
        amount: 50
    }

    if (400 <= robot.info().x && robot.info().x <= 450) {
        robot.action = {
            type: 'jump',
            amount: 10
        }
    }
}

/* Level 5 */
function init(robot) {
    // your code goes here
}

function loop(robot) {
    robot.action = {
        type: 'move',
        amount: 50
    }

    if ((360 <= robot.info().x && robot.info().x <= 500) || (540 <= robot.info().x && robot.info().x <= 590)) {
        robot.action = {
            type: 'jump',
            amount: 10
        }
    }
}

/* Level 6 */
function init(robot) {
    // your code goes here
}

function loop(robot) {
    if (robot.info().coins % 2 == 0) {
        robot.action = {
            type: 'move',
            amount: 50
        }
    }
    else {
        robot.action = {
            type: 'move',
            amount: -50
        }
    }
}

/* Level 7 */
function init(robot) {
    // your code goes here
}

function loop(robot) {
    robot.action = {
        type: 'move',
        amount: 50
    }

    if ((200 <= robot.info().x && robot.info().x <= 300)) {
        robot.action = {
            type: 'jump',
            amount: 10
        }
    }
}

/* Level 8 */
function init(robot) {
    robot.iterationsAfterCoin = 0;
}

function loop(robot) {
    if (robot.iterationsAfterCoin > 4) {
        robot.action = {
            type: 'jump',
            amount: 10
        }
    }
    if (robot.info().coins > 0) {
        robot.iterationsAfterCoin++;
        console.log(robot.info().coins > 0)
    }
}