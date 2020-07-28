var ENV = 'prod'
var UUIDKey = 'UUID'

function Analytics(id) {
	this.constructor = function(id) {
		this.root = "https://analytics.projectcongress.com/" + ENV + "/collect"
		this.id = id
		this.userId = ''
		this.userProps = {}
		this.UUID = this.getUUID()
	}

	this.getUUID = function() {
		var prevUUID = localStorage.getItem('UUID');
		var UUID = ''
		if (prevUUID) {
			UUID = prevUUID
		} else {
			UUID = this.createUUID()
			localStorage.setItem('UUID', UUID)
		}

		return UUID
	}

	this.createUUID = function(a) {
		// See: https://github.com/amplitude/Amplitude-Javascript/blob/master/src/uuid.js
		var uuid = function(a) {
			return a           // if the placeholder was passed, return
				? (              // a random number from 0 to 15
					a ^            // unless b is 8,
					Math.random()  // in which case
					* 16           // a random number from
					>> a / 4         // 8 to 11
				).toString(16) // in hexadecimal
				: (              // or otherwise a concatenated string:
					[1e7] +        // 10000000 +
					-1e3 +         // -1000 +
					-4e3 +         // -4000 +
					-8e3 +         // -80000000 +
					-1e11          // -100000000000,
				).replace(     // replacing
					/[018]/g,    // zeroes, ones, and eights with
					uuid         // random hex digits
				);
		}
		return uuid()
	}

	this.send = function(event, props) {
		if (ENV == 'dev') return console.log(event, props || {})

		let evtObj = {
			anonymousId: this.UUID,
			eventType: event,
			language: navigator.language,
            referrer: document.referrer,
            eventProperties: props,
            url: window.location.href,
			time: Math.floor(Date.now())
		}

		var data = JSON.stringify({ id: this.id, event: evtObj });

		fetch(this.root, {
            method: "POST",
            body: data,
            headers: {
            	'Content-Type': 'application/json'
            }
		})
	}

	this.constructor(key)
}