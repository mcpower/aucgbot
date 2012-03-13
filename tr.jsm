// -*- Mode: JavaScript; tab-width: 4 -*- vim:tabstop=4 syntax=javascript:
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

module.version = 1.2;
module.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

module.cmd_tr =
function cmd_tr(dest, msg, nick, host, at, serv, relay)
{	const args = /^"(\"?[^"]+(?:\"[^"]*)*)" "(\"?[^"]+(?:\"[^"]*)*)" "(\"?[^"]+(?:\"[^"]*)*)"$/.exec(msg);
	if (!args)
		aucgbot.msg(dest, at + 'Invalid usage. Usage: tr "<text>" "<trFromTable>" "<trToTable>"');
	else
		aucgbot.msg(dest, at + tr.apply(null, args));
	return true;
}
module.cmd_rot13 =
function cmd_rot13(dest, msg, nick, host, at, serv, relay)
{	aucgbot.msg(dest, at + tr(msg, this.alphabet + this.alphabet.toLowerCase(), "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"));
	return true;
}
module.cmd_revtr =
function cmd_revtr(dest, msg, nick, host, at, serv, relay)
{	aucgbot.msg(dest, at + tr(msg, this.alphabet + this.alphabet.toLowerCase(), this.reverseABC + this.reverseABC.toLowerCase()));
	return true;
}
module.cmd_rev =
function cmd_rev(dest, msg, nick, host, at, serv, relay)
{	aucgbot.msg(dest, at + msg.reverse());
	return true;
}

// based on http://www.svendtofte.com/code/usefull_prototypes/
// and I guess stolen from https://developer.mozilla.org/en/A_re-introduction_to_JavaScript
String.prototype.reverse =
function reverse()
{	var s = "";
	for (var i = this.length - 1; i >= 0; i--)
	    s += this[i];
	return s;
}
module.reverseABC = module.alphabet.reverse();

function tr(str, fromTable, toTable)
{	for (var s = "", i = 0, j, k; i < str.length; i++)
	{	if ((j = fromTable.indexOf(str[i])) == -1)
			k = str[i];
		else if (!(k = toTable[j]))
			k = "";
		s += k;
	}
	return s;
}