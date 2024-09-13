function encoderRing(string) {
    // After making the decoderRing function to catch spam emails in your new awesome filter, you must now create an encoder to test it out.
    // You are given the same translation table of all the homoglyphs to test out, and a string argument for which you need to substitute characters when applicable
    // You must return the encoded string.
    // EX: If given a string of "Click here to verify your account", a string like "Cӏìċκ һėrė tó ѵėrïfý ýöùr ạċċỏùոt" will be returned

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

module.exports = encoderRing;
