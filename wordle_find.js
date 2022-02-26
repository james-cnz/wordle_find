// Find good starting words for Wordle.
// Letters in order of most common are: earotlisnucyhdpgmbfkwvxzqj
// 3 common words: "later noisy chump" (no d)
// Modified programme found:
// 4 common words: "trash nudge block wimpy" (no f)
// 4 common words (1 repeated letter): "snore tidal chump gawky"
// 5 rare words (2 repeated letters): "litre capon bumfs vozhd gawky"
// Sarah's 4 words: "width comfy prank glues" (not from the programme)
function find() {
    // Read in word list.
    var word_list_in_string = document.querySelector("textarea#word_list").value;
    var word_list_in_array = word_list_in_string.match(/\b[a-z]+\b/g);
    // Sort word list.
    var word_list_array = [];
    var last_word = "aaaaa";
    while (last_word < "zzzzz") {
        var next_word = "zzzzz";
        for (var wi = 0; wi < word_list_in_array.length; wi++) {
            var w = word_list_in_array[wi];
            if (w > last_word && w < next_word) {
                next_word = w;
            }
        }
        if (next_word < "zzzzz")
            word_list_array.push(next_word);
        last_word = next_word;
    }
    // Write letter frequencies.
    if (false) {
        var lo = [];
        for (var li_1 = 0; li_1 < 26; li_1++) {
            var l = String.fromCharCode("a".charCodeAt(0) + li_1);
            lo[l] = 0;
        }
        for (var w1i = 0; w1i < word_list_array.length; w1i++) {
            var w1 = word_list_array[w1i];
            var ws = w1;
            var wsl = ws.length;
            var ls = [];
            for (var wsi = 0; wsi < wsl; wsi++) {
                ls[ws[wsi]] = true;
            }
            for (var li = 0; li < 26; li++) {
                var l = String.fromCharCode("a".charCodeAt(0) + li);
                if (ls[l]) {
                    lo[l]++;
                }
                ;
            }
        }
        for (var li1 = 0; li1 < 26; li1++) {
            var lm = null;
            var lmn = -1;
            for (var li2 = 0; li2 < 26; li2++) {
                var l = String.fromCharCode("a".charCodeAt(0) + li2);
                var ln = lo[l];
                if (ln > lmn) {
                    lm = l;
                    lmn = ln;
                }
            }
            lo[lm] = -1;
            console.log(lm + ": " + lmn);
        }
    }
    // First word loop.
    for (var w1i = 0; w1i < word_list_array.length; w1i++) {
        var w1 = word_list_array[w1i];
        // Countdown.
        // let wleft = word_list_array.length-w1i;
        // if (wleft%100 == 0) { console.log(wleft); }
        // Ignore first words that contain letters that are too rare.
        if (!w1.match(/^[earotli]+$/)) {
            continue;
        }
        ;
        // Check for letter overlap (for the first word this just means repeated letters).
        var overlap = false;
        var ws = w1;
        var wsl = ws.length;
        var ls = [];
        for (var wsi_1 = 0; wsi_1 < wsl; wsi_1++) {
            if (ws[wsi_1] in ls) {
                overlap = true;
            }
            ls[ws[wsi_1]] = true;
        }
        // Check the first word does contain the most common letters.
        var most_common = ls["e"] && ls["a"] && ls["r"];
        // Second word loop.
        if (most_common && !overlap)
            for (var w2i = 0; w2i < word_list_array.length; w2i++) {
                var w2 = word_list_array[w2i];
                // Ignore second words that contain letters that are too rare.
                if (!w2.match(/^[earotlisnucyh]+$/)) {
                    continue;
                }
                ;
                // Check for letter overlap.
                var overlap_1 = false;
                ws = w1 + w2;
                wsl = ws.length;
                ls = [];
                for (var wsi = 0; wsi < wsl; wsi++) {
                    if (ws[wsi] in ls) {
                        overlap_1 = true;
                    }
                    ls[ws[wsi]] = true;
                }
                // Check the second word does contain the most common letters.
                most_common = ls["e"] && ls["a"] && ls["r"] && ls["o"] && ls["t"] && ls["l"] && ls["i"] && ls["s"];
                // Third word loop.
                if (most_common && !overlap_1)
                    for (var w3i = 0; w3i < word_list_array.length; w3i++) {
                        var w3 = word_list_array[w3i];
                        // Ignore third words that contain letters that are too rare.
                        if (!w3.match(/^[earotlisnucyhdpgm]+$/)) {
                            continue;
                        }
                        ;
                        // Check for letter overlap
                        var overlap_2 = false;
                        ws = w1 + w2 + w3;
                        wsl = ws.length;
                        ls = [];
                        for (var wsi = 0; wsi < wsl; wsi++) {
                            if (ws[wsi] in ls) {
                                overlap_2 = true;
                            }
                            ls[ws[wsi]] = true;
                        }
                        // Check the third word does contain the most common letters.
                        most_common = ls["e"] && ls["a"] && ls["r"] && ls["o"] && ls["t"] && ls["l"] && ls["i"] && ls["s"] && ls["n"] && ls["u"] && ls["c"] && ls["y"] && ls["h"];
                        if (most_common && !overlap_2) {
                            console.log(w1 + " " + w2 + " " + w3);
                        }
                        ;
                        // Fourth word loop.
                        if (false)
                            for (var w4i = 0; w4i < word_list_array.length; w4i++) {
                                var w4 = word_list_array[w4i];
                                // Ignore fourth words that contain letters that are too rare.
                                // if (!w4.match(/^[earotlisnucyhdpgmbfkwvxzq]+$/)) { continue; };
                                // Check for letter overlap
                                var overlap_3 = 0;
                                ws = w1 + w2 + w3 + w4;
                                wsl = ws.length;
                                ls = [];
                                for (var wsi = 0; wsi < wsl; wsi++) {
                                    if (ws[wsi] in ls) {
                                        overlap_3++;
                                    }
                                    ls[ws[wsi]] = true;
                                }
                                // Check the fourth word does contain the most common letters.
                                most_common = ls["e"] && ls["a"] && ls["r"] && ls["o"] && ls["t"] && ls["l"] && ls["i"] && ls["s"] && ls["n"] /*&& ls["u"]*/ && ls["c"] /*&& ls["y"]*/ && ls["h"]; // && ls["d"]; // && ls["p"]; // && ls["g"]; // && ls["m"]; // && ls["b"];
                                if (most_common && overlap_3 <= 0) {
                                    console.log(w1 + " " + w2 + " " + w3 + " " + w4);
                                }
                                // Fifth word loop.
                                if (false)
                                    for (var w5i = 0; w5i < word_list_array.length; w5i++) {
                                        var w5 = word_list_array[w5i];
                                        // Ignore fifth words that contain letters that are too rare.
                                        // if (!w4.match(/^[earotlisnucyhdpgmbfkwvxzq]+$/)) { continue; };
                                        // Check for letter overlap
                                        var overlap_4 = 0;
                                        ws = w1 + w2 + w3 + w4 + w5;
                                        wsl = ws.length;
                                        ls = [];
                                        for (var wsi = 0; wsi < wsl; wsi++) {
                                            if (ws[wsi] in ls) {
                                                overlap_4++;
                                            }
                                            ls[ws[wsi]] = true;
                                        }
                                        // Check the fifth word does contain the most common letters.
                                        most_common = ls["e"] && ls["a"] && ls["r"] && ls["o"] && ls["t"] && ls["l"] && ls["i"] && ls["s"] && ls["n"] && ls["u"] && ls["c"] && ls["y"] && ls["h"] && ls["d"] && ls["p"] && ls["g"] && ls["m"] && ls["b"] && ls["f"] && ls["k"] && ls["w"];
                                        // Write the words.
                                        if (most_common && overlap_4 <= 2) {
                                            console.log(w1 + " " + w2 + " " + w3 + " " + w4 + " " + w5);
                                        }
                                    }
                            }
                    }
            }
    }
    console.log("done");
}
