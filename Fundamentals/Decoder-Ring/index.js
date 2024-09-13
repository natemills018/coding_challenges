function decoderRing(string) {
    // Your organization is receiving a lot of spam emails, but for some reason the spam filter isn't catching certain messages.
    // After a while, you observe that there are a lot of unicode characters being substituted in to bypass string matching
    // You are given a translation table of all the characters being substituted in, and a function argument of a string full of substituted characters.
    // You must return a string with characters back in the latin alphabet
    // EX: If given a string of "ýöú wȯո!", you must return the string "you won!"

    const translationTable = {
        a: ["à", "á", "ạ", "ą"],
        c: ["ƈ", "ċ"],
        d: ["ԁ", "ɗ"],
        e: ["ẹ", "ė", "ė", "é", "è"],
        g: ["ġ"],
        h: ["һ"],
        i: ["í", "ì", "ï"],
        j: ["ј", "ʝ"],
        k: ["κ"],
        l: ["ӏ", "ḷ"],
        n: ["ո"],
        o: ["ȯ", "ỏ", "ơ", "ö", "ó", "ò"],
        p: ["р"],
        q: ["զ"],
        s: ["ʂ"],
        u: ["ü", "ú", "ù"],
        v: ["ν", "ѵ"],
        x: ["х", "ҳ"],
        y: ["у", "ý"],
        z: ["ʐ", "ż"]
    };

    return null;
}

module.exports = decoderRing;
