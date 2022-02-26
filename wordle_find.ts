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
    let word_list_in_string = (<HTMLTextAreaElement>document.querySelector("textarea#word_list")).value;
    let word_list_in_array = word_list_in_string.match(/\b[a-z]+\b/g);

    // Sort word list.
    let word_list_array: string[] = [];
    let last_word: string = "aaaaa";
    while (last_word < "zzzzz") {
        let next_word: string = "zzzzz";
        for (let wi = 0; wi < word_list_in_array.length; wi++) {
            let w = word_list_in_array[wi];
            if (w > last_word && w < next_word) {
                next_word = w;
            }
        }
        if (next_word < "zzzzz") word_list_array.push(next_word);
        last_word = next_word;
    }

    // Write letter frequencies.
    if (false) {

        let lo = [];
        for (let li=0; li<26; li++) {
            let l = String.fromCharCode("a".charCodeAt(0) + li);
            lo[l] = 0;
        }

        for (let w1i = 0; w1i < word_list_array.length; w1i++) {
            let w1 = word_list_array[w1i];
            let ws = w1;

            let wsl = ws.length;
            let ls = [];
            for (var wsi = 0; wsi < wsl; wsi++) {
                ls[ws[wsi]] = true;
            }
            for (var li=0; li<26; li++) {
                let l = String.fromCharCode("a".charCodeAt(0) + li);
                if (ls[l]) {lo[l]++};
            }
        }

        for (let li1=0; li1<26; li1++) {
            let lm = null;
            let lmn = -1;
            for (let li2=0; li2<26; li2++) {
                let l = String.fromCharCode("a".charCodeAt(0) + li2);
                let ln = lo[l];
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
    for (let w1i = 0; w1i < word_list_array.length; w1i++) {
        let w1 = word_list_array[w1i];

        // Countdown.
        // let wleft = word_list_array.length-w1i;
        // if (wleft%100 == 0) { console.log(wleft); }

        // Ignore first words that contain letters that are too rare.
        if (!w1.match(/^[earotli]+$/)) { continue; };

        // Check for letter overlap (for the first word this just means repeated letters).
        let overlap = false;
        let ws = w1;
        let wsl = ws.length;
        let ls = [];
        for (let wsi = 0; wsi < wsl; wsi++) {
            if (ws[wsi] in ls) {
                overlap = true;
            }
            ls[ws[wsi]] = true;
        }

        // Check the first word does contain the most common letters.
        let most_common = ls["e"] && ls["a"] && ls["r"];

        // Second word loop.
        if (most_common && !overlap)  for (var w2i = 0; w2i < word_list_array.length; w2i++) {
            let w2 = word_list_array[w2i];

            // Ignore second words that contain letters that are too rare.
            if (!w2.match(/^[earotlisnucyh]+$/)) { continue; };

            // Check for letter overlap.
            let overlap = false;
            ws = w1 + w2;
            wsl = ws.length;
            ls = [];
            for (var wsi = 0; wsi < wsl; wsi++) {
                if (ws[wsi] in ls) {
                    overlap = true;
                }
                ls[ws[wsi]] = true;
            }

            // Check the second word does contain the most common letters.
            most_common = ls["e"] && ls["a"] && ls["r"] && ls["o"] && ls["t"] && ls["l"] && ls["i"] && ls["s"];

            // Third word loop.
            if (most_common && !overlap) for (var w3i = 0; w3i < word_list_array.length; w3i++) {
                let w3 = word_list_array[w3i];

                // Ignore third words that contain letters that are too rare.
                if (!w3.match(/^[earotlisnucyhdpgm]+$/)) { continue; };

                // Check for letter overlap
                let overlap = false;
                ws = w1 + w2 + w3;
                wsl = ws.length;
                ls = [];
                for (var wsi = 0; wsi < wsl; wsi++) {
                    if (ws[wsi] in ls) {
                        overlap = true;
                    }
                    ls[ws[wsi]] = true;
                }

                // Check the third word does contain the most common letters.
                most_common = ls["e"] && ls["a"] && ls["r"] && ls["o"] && ls["t"] && ls["l"] && ls["i"] && ls["s"] && ls["n"] && ls["u"] && ls["c"] && ls["y"] && ls["h"];

                if (most_common && !overlap) { console.log(w1 + " " + w2 + " " + w3) };
                // Fourth word loop.
                if (false)
                for (let w4i = 0; w4i < word_list_array.length; w4i++) {
                    let w4 = word_list_array[w4i];

                    // Ignore fourth words that contain letters that are too rare.
                    // if (!w4.match(/^[earotlisnucyhdpgmbfkwvxzq]+$/)) { continue; };

                    // Check for letter overlap
                    let overlap = 0;
                    ws = w1 + w2 + w3 + w4;
                    wsl = ws.length;
                    ls = [];
                    for (var wsi = 0; wsi < wsl; wsi++) {
                        if (ws[wsi] in ls ) {
                            overlap++;
                        }
                        ls[ws[wsi]] = true;
                    }

                    // Check the fourth word does contain the most common letters.
                    most_common = ls["e"] && ls["a"] && ls["r"] && ls["o"] && ls["t"] && ls["l"] && ls["i"] && ls["s"] && ls["n"] /*&& ls["u"]*/ && ls["c"] /*&& ls["y"]*/ && ls["h"]; // && ls["d"]; // && ls["p"]; // && ls["g"]; // && ls["m"]; // && ls["b"];

                    if (most_common && overlap <= 0) { console.log(w1 + " " + w2 + " " + w3 + " " + w4); }
                    // Fifth word loop.
                    if (false)
                    for (let w5i = 0; w5i < word_list_array.length; w5i++) {
                        let w5 = word_list_array[w5i];

                        // Ignore fifth words that contain letters that are too rare.
                        // if (!w4.match(/^[earotlisnucyhdpgmbfkwvxzq]+$/)) { continue; };

                        // Check for letter overlap
                        let overlap = 0;
                        ws = w1 + w2 + w3 + w4 + w5;
                        wsl = ws.length;
                        ls = [];
                        for (var wsi = 0; wsi < wsl; wsi++) {
                            if (ws[wsi] in ls ) {
                                overlap++;
                            }
                            ls[ws[wsi]] = true;
                        }

                        // Check the fifth word does contain the most common letters.
                        most_common = ls["e"] && ls["a"] && ls["r"] && ls["o"] && ls["t"] && ls["l"] && ls["i"] && ls["s"] && ls["n"] && ls["u"] && ls["c"] && ls["y"] && ls["h"] && ls["d"] && ls["p"] && ls["g"] && ls["m"] && ls["b"] && ls["f"] && ls["k"] && ls["w"];
    
                        // Write the words.
                        if (most_common && overlap <= 2) {
                            console.log(w1 + " " + w2 + " " + w3 + " " + w4 + " " + w5);
                        }
                    }
                }
            }
        }

    }
    console.log("done");
}

