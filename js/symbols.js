const symbolCollections = {
    magical: {
        name: "Magical Symbols",
        symbols: [
            { code: "2728", symbol: "✨", name: "Sparkles" },
            { code: "2721", symbol: "✡", name: "Star of David" },
            { code: "2638", symbol: "☸", name: "Wheel of Dharma" },
            { code: "262F", symbol: "☯", name: "Yin Yang" },
            { code: "2720", symbol: "✠", name: "Maltese Cross" },
            { code: "2625", symbol: "☥", name: "Ankh" },
            { code: "26E4", symbol: "⛤", name: "Pentagram" },
            { code: "26E5", symbol: "⛥", name: "Right-Handed Pentagram" },
            { code: "26E6", symbol: "⛦", name: "Left-Handed Pentagram" },
            { code: "2727", symbol: "✧", name: "White Four Pointed Star" },
            { code: "2726", symbol: "✦", name: "Black Four Pointed Star" },
            { code: "2600", symbol: "☀", name: "Sun" },
            { code: "263D", symbol: "☽", name: "First Quarter Moon" },
            { code: "263E", symbol: "☾", name: "Last Quarter Moon" },
            { code: "2605", symbol: "★", name: "Black Star" },
            { code: "2606", symbol: "☆", name: "White Star" },
            { code: "269B", symbol: "⚛", name: "Atom Symbol" },
            { code: "1F52E", symbol: "🔮", name: "Crystal Ball" },
            { code: "1F31F", symbol: "🌟", name: "Glowing Star" },
            { code: "1F320", symbol: "🌠", name: "Shooting Star" }
        ]
    },

    mystical: {
        name: "Mystical & Alchemical",
        symbols: [
            { code: "2609", symbol: "☉", name: "Sun Symbol" },
            { code: "263F", symbol: "☿", name: "Mercury" },
            { code: "2640", symbol: "♀", name: "Venus" },
            { code: "2641", symbol: "♁", name: "Earth" },
            { code: "2642", symbol: "♂", name: "Mars" },
            { code: "2643", symbol: "♃", name: "Jupiter" },
            { code: "2644", symbol: "♄", name: "Saturn" },
            { code: "2645", symbol: "♅", name: "Uranus" },
            { code: "2646", symbol: "♆", name: "Neptune" },
            { code: "2647", symbol: "♇", name: "Pluto" },
            { code: "26B3", symbol: "⚳", name: "Ceres" },
            { code: "26B4", symbol: "⚴", name: "Pallas" },
            { code: "26B5", symbol: "⚵", name: "Juno" },
            { code: "26B6", symbol: "⚶", name: "Vesta" },
            { code: "26B7", symbol: "⚷", name: "Chiron" },
            { code: "26B8", symbol: "⚸", name: "Black Moon Lilith" },
            { code: "2695", symbol: "⚕", name: "Staff of Aesculapius" },
            { code: "269A", symbol: "⚚", name: "Staff of Hermes" },
            { code: "26AD", symbol: "⚭", name: "Marriage Symbol" },
            { code: "26AE", symbol: "⚮", name: "Divorce Symbol" }
        ]
    },

    geometric: {
        name: "Geometric Symbols",
        symbols: [
            { code: "25B2", symbol: "▲", name: "Black Up-Pointing Triangle" },
            { code: "25BC", symbol: "▼", name: "Black Down-Pointing Triangle" },
            { code: "25C6", symbol: "◆", name: "Black Diamond" },
            { code: "25C7", symbol: "◇", name: "White Diamond" },
            { code: "25CB", symbol: "○", name: "White Circle" },
            { code: "25CF", symbol: "●", name: "Black Circle" },
            { code: "25A0", symbol: "■", name: "Black Square" },
            { code: "25A1", symbol: "□", name: "White Square" },
            { code: "25B6", symbol: "▶", name: "Black Right-Pointing Triangle" },
            { code: "25C0", symbol: "◀", name: "Black Left-Pointing Triangle" },
            { code: "2756", symbol: "❖", name: "Black Diamond Minus White X" },
            { code: "2742", symbol: "❂", name: "Circled Open Centre Eight Pointed Star" },
            { code: "2743", symbol: "❃", name: "Heavy Teardrop-Spoked Asterisk" },
            { code: "2744", symbol: "❄", name: "Snowflake" },
            { code: "2745", symbol: "❅", name: "Tight Trifoliate Snowflake" },
            { code: "2746", symbol: "❆", name: "Heavy Chevron Snowflake" },
            { code: "2747", symbol: "❇", name: "Sparkle" },
            { code: "2748", symbol: "❈", name: "Heavy Sparkle" },
            { code: "2749", symbol: "❉", name: "Balloon-Spoked Asterisk" },
            { code: "274A", symbol: "❊", name: "Eight Teardrop-Spoked Propeller Asterisk" }
        ]
    },

    mathematical: {
        name: "Mathematical Symbols",
        symbols: [
            { code: "2200", symbol: "∀", name: "For All" },
            { code: "2201", symbol: "∁", name: "Complement" },
            { code: "2202", symbol: "∂", name: "Partial Differential" },
            { code: "2203", symbol: "∃", name: "There Exists" },
            { code: "2204", symbol: "∄", name: "There Does Not Exist" },
            { code: "2205", symbol: "∅", name: "Empty Set" },
            { code: "2206", symbol: "∆", name: "Increment" },
            { code: "2207", symbol: "∇", name: "Nabla" },
            { code: "2208", symbol: "∈", name: "Element Of" },
            { code: "2209", symbol: "∉", name: "Not An Element Of" },
            { code: "220A", symbol: "∊", name: "Small Element Of" },
            { code: "220B", symbol: "∋", name: "Contains As Member" },
            { code: "220C", symbol: "∌", name: "Does Not Contain As Member" },
            { code: "220D", symbol: "∍", name: "Small Contains As Member" },
            { code: "220E", symbol: "∎", name: "End Of Proof" },
            { code: "220F", symbol: "∏", name: "N-ary Product" },
            { code: "2210", symbol: "∐", name: "N-ary Coproduct" },
            { code: "2211", symbol: "∑", name: "N-ary Summation" },
            { code: "2212", symbol: "−", name: "Minus Sign" },
            { code: "2213", symbol: "∓", name: "Minus-Or-Plus Sign" }
        ]
    }
};
