function calc(expr)
{	const pi = Math.PI, e = Math.E, // aliases
	// function aliases
		// trigonometric
		acos = Math.acos,
		asin = Math.asin,
		atan = Math.atan,
		atan2 = Math.atan2,
		cos = Math.cos,
		s = Math.sin,
		tan = Math.tan,
		// power & logarithmic
		exp = Math.exp,
		log = Math.log,
		pow = Math.pow,
		sqrt = Math.sqrt,
		// miscellaneous
		abs = Math.abs,
		ceil = Math.ceil,
		max = Math.max,
		min = Math.min,
		floor = Math.floor,
		round = Math.round,
		rnd = rand = Math.random,
			// give these aliases, even though we don't need to
			randomrange = randint = ranint,
			phi = (1 + sqrt(5)) / 2;
	expr = expr.replace(/(answer to |meaning of |)(|(|the )(|ultimate )question of )life,* the universe,* (and|&) every ?thing/g, "42")
	           .replace(/math\.*|#|\?+$|what('| i)s|calc(ulat(e|or)|)|imum|olute|ing|er|the|of/g, "").replace(/(a|)(?:rc|)(cos|sin|tan)\w+/g, "$1$2").replace(/(square ?|)root|\xE2\x88\x9A/g, "sqrt")
	           .replace(/ave\w+|mean/, "ave").replace(/(recip|fact|rand?int|ra?nd|d|sqrt|s)[^ ()]*\b/, "$1").replace(/(\d+(?:\.\d+|!*)|\.\d+) ?([fc])/g, "$2($1)").replace(/(\d+|)d(\d+)/g, "d($2,$1)")
	           .replace(/(s|sqrt|round|floor|ceil|log|exp|recip) *(\d+(?:\.\d+|!*)|\.\d+)/g, "$1($2)").replace(/tan +(\d+(?:\.\d+|!*)|\.\d+)/, "tan($1)")
	           .replace(/(\d+(?:\.\d+(?:e[-+]?\d(?:\.\d+))|!*)|\.\d+|ph?i|e) ?\*\* ?([-+]?\d+(?:\.\d+(?:e[-+]?\d(?:\.\d+))|!*)|\.\d+|ph?i|e)/g, "pow($1,$2)").replace(/(\d+)!/g, "fact($1)")
	           .replace(/\b(\d+(?:\.\d+|)|\.\d+) ?([(a-df-wyz])/g,"$1*$2").replace(/\b(ph?i|e) ?([^-+*\/&|^<>%),?: ])/g,"$1*$2").replace(/(\(.+?\)) ?([^-+*\/&|^<>%!),?: ])/g,"$1*$2");
	while (/pow\(.+,.+\) ?\*\* ?[-+]?(\d+(\.\d|!?)|\.\d)/.test(expr) || /fact\(.+\)!/.test(expr)) // XXX "pow(pow(a,b),c) ** x" becomes "pow(pow(a,pow(b),c),x)"!
		expr = expr.replace(/pow(\(.+?,)(.+?)\) ?\*\* ?([-+]?(\d+(?:\.\d+|!*)|\.\d+))/g, "pow$1pow($2,$3))").replace(/(fact\(.+?\))!/g, "fact($1)");
	return Number(eval(expr));
}
function fact(n)
{	var e = 1;
	n = Number(n);
	if (n > 170) // We can't calculate factorials past this, bail.
		e = Infinity;
	else if (n < 0 || isNaN(n) || /\./.test(n))
		e = NaN; // Positive integers only.
	else
		for (var i = 1; i <= n; i++)
			e *= i;
	return e;
}
function ave()
{	var total = 0;
	for (var i = 0; i < arguments.length; i++)
		total += arguments[i];
	return total / arguments.length;
}
function d(sides, count, modifier) // Partially from cZ dice plugin.
{	var total = 0, i;
	sides = parseInt(sides) || 6;
	count = parseInt(count) || 1;
	if (sides > 100) sides = 100;
	for (i = 0; i < count; i++)
		total += ranint(1, sides);
	return total + (parseFloat(modifier) || 0);
}
function recip(n) 1 / n;
function f(temp) (temp - 32) / 1.8;
function c(temp) temp * 1.8 + 32;