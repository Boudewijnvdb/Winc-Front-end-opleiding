const passwordVerif = {
    isLessThan8Chars: function (ww) {
        const lengte = ww.length;
        if (lengte < 9) {
            return true;
        } else {
            return false;
        }
    },
    isNotBlank: function (ww) {
        if (ww != "null") {
            return true;
        } else {
            return false
        }
    },
    hasUppercase: function (ww) {
        const letters = (/[A-Z]/);
        if (ww.match(letters)) {
            return true;
        } else {
            return false
        }
    },
    hasLowercase: function (ww) {
        const letters = (/[a-z]/);
        if (ww.match(letters)) {
            return true;
        } else {
            return false
        }
    },
    hasDigit: function (ww) {
        const number = (/[0-9]/);
        if (ww.match(number)) {
            return true;
        } else {
            return false
        }
    },
    bigtest: function (password) {
        let score = 0;

        if (isNotBlank(password) == true) {
            score++;
        }
        if (isLessThan8Chars(password) == true) {
            score++;
        }
        if (hasUppercase(password) == true) {
            score++;
        }
        if (hasDigit(password) == true) {
            score++;
        }
        if (hasLowercase(password) == true) {
            score++;
        } else {
            // Voor deze requirement maken een uitzondering; reset de score als hier niet aan wordt voldaan
            score = 0;
        }
        return {
            score: score,
            valid: score >= 3
        };

    }



};

console.log(passwordVerif.bigtest("Ikben1"))



module.exports = passwordVerif;


