// -*- Mode: JavaScript; tab-width: 4 -*- vim:ts=4 sw=4 syntax=javascript:
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
/*global module: false */

module.version = "0.2.1 (2014-12-30)";
module.cmd_acidtrip = function cmd_acidtrip(e) {
	var s = '', msg = e.args,
		maxi = Math.ceil(msg.length / 60),
		last = msg.length % 60,
		lastIndex = 0, fg, bg;
	for (var j = 0; j < maxi; j++) {
		mlen = 60;
		if (j + 1 == maxi) {
			mlen = last;
		}
		for (var i = lastIndex; i < (lastIndex + mlen); i++) {
			fg = randint(0, 15);
			bg = randint(0, 15);
			if (fg == bg) {
				fg++;
				fg %= 15;
			}
			if (bg < 10) {
				bg = '0' + bg;
			}
			s += '\003' + fg + ',' + bg + msg[i];
		}
		e.send(s);
		lastIndex += mlen;
		s = '';
	}
	return true; // Say that we've reached a valid command and stop processing the message.
};
