
// algorithm SM-2
// http://super-memory.com/english/ol/sm2.htm
//
// input:
// user grade q
// 5 - perfect response
// 4 - correct response after a hesitation
// 3 - correct response recalled with serious difficulty
// 2 - incorrect response; where the correct one seemed easy to recall
// 1 - incorrect response; the correct one remembered
// 0 - complete blackout.
//
// repetition number n
// easiness factor EF
// interval I

// output:
//      updated values of n, EF, I

function algorithmSM2(q, n, EF, I) {
    if (q >= 3) {
        if (n === 0) {
            I = 1;
        } else if (n === 1) {
            I = 6;
        } else {
            I = Math.round(I * EF);
        }
    } else {
        n = 0;
        I = 1;
    }

    EF = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));

    if (EF < 1.3) {
        EF = 1.3;
    }

    return [n, EF, I];
}
