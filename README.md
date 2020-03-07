Have you ever gotten annoyed that a service/hotel/form asks for your email address?
Are you like me and paranoid that this email address will be given forward to a spam list?

Fret no more, create and delete email aliases in a blink of an eye!

---

# Gandi Email Alias Updater

*...for lack of a better name...*


### Motivation

I actually first got the idea when I went out for a couple of beers with a friend of mine, who was going to meet a friend of his, who in turn had gone out for beers with his colleague, Nebuchadnezzar (because I'm great at coming up with names).
Nebuchadnezzar said that a friend of his, who was into SysAdmin stuff, handled all of his email stuff on the servers, but had left some sort of interface for him to create email addresses (i.e. the local-parts).
Nebuchadnezzar further stated he used this to quickly create an address that he could give out to, e.g., hotels so that he'd know who further sold out his data (in the event he got spam or something else).

As can be seen from this project I got a bit inspired and quickly hacked this together the instant I got my own email to work, which is incredibly tedious to do on your own server (the email server that is) and I thus just went with what my registrar ([Gandi](https://gandi.net/)) offers.


### Implementation details

As the small introduction might have implied, this project is a small web application for creating and deleting email aliases on a whim.
How this works is by having a Node.js web application running on a server accepting updates or deletions of aliases, and communicating with the [Gandi Email API](https://api.gandi.net/docs/email/).
That's right, my emails are hosted by [Gandi](https://gandi.net/) (it's such super convenient and the API is pretty good, albeit the mailbox is a bit small).

##### Tech Stack

This project is made with [Node.js](https://nodejs.org/), no particular version in mind, but only tested with v8.10.0 and v8.11.2.

[Express](https://expressjs.com/) as the web application framework and [Pug](https://pugjs.org/) as my templating language.
For communicating with the Gandi Email API I use [axios](https://github.com/axios/axios).


### Development

Before trying to run the project install all needed packages with:
    
    npm install

After that you can run the web server with:

    npm start

Voilà!
