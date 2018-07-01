# Lean Coffee Power-Up for Trello
## What _is_ Trello?
[Trello](https://trello.com/) is a project management web application based on the concepts of boards, lists and cards.

From a developer's perspective, it's also a platform which can be extended using Power-Ups
(here's a [directory of existing ones](https://trello.com/power-ups), and here's [the official introduction to Power-Ups development](https://developers.trello.com/v1.0/reference#power-ups-intro)).

## So, this is a Power-Up?
Yep. This project implements a Power-Up meant to support "Lean Coffee"-style sessions based on a Trello board.

## What is "Lean Coffee", then?
From the [official page](http://leancoffee.org/):

    Lean Coffee is a structured, but agenda-less meeting.

The following is an example of a Lean Coffee session:
1. 5 minutes to add new cards to a "Discussion topics" list
2. 5 minutes to vote for individual topics (each person gets a fixed number of votes, [based on the number of topics](http://www.leanmath.com/blog-entry/multi-voting-math-or-n3))
3. The moderator sorts the topics list by votes, and moves the top card to the "Discussing" list
4. 5 minutes to discuss the card, starting with its creator setting the context
5. There’s a timer: when it goes off, everybody can vote to keep discussing the same topic or move on. Based on the vote, the card may be moved to the “Done” list, and a new one put in its place
6. Go back to #4, rinse and repeat

It can be made simpler or more complicated, but that's the gist of it.

## Fine. And how does this Power-Up help?
Once enabled for a board, this Power-Up implements:
- voting capabilities (similar to the official [Voting Power-Up](http://info.trello.com/power-ups/voting))
- sorting a list by number of votes
- discussion management (start/pause/end a timer for a discussion about a card)
- card badges, displaying:
    - number of votes
    - elapsed time for a discussion
    - discussion status (ongoing, paused, ended)
- card detail badges, displaying the same information, plus:
    - the ability to vote on a paused discussion to determine the next step

Card Badges | Card Detail Badges | Menu
------------|--------------------| ----
![Votes][CardBadgeVoting] | ![Votes][CardDetailsBadgePaused] | ![Votes][PowerUpButtons]
![Votes][CardBadgeOngoing] | | 

[CardBadgeVoting]: ./assets/readme/card_badge_voting.png
[CardBadgeOngoing]: ./assets/readme/card_badge_ongoing.png
[CardDetailsBadgePaused]: ./assets/readme/card_details_badge_paused.png
[PowerUpButtons]: ./assets/readme/powerup_buttons.png

## Getting started
Trello Power-Ups can be managed following [these instructions](https://developers.trello.com/docs/managing-power-ups).

Once you have your Power-Up running, either on `localhost` during development or deployed somewhere on the Internet,
you can add it to one of your Trello teams by going to [this page](https://trello.com/power-ups/admin)
(you need to be a Team Admin).

## Running locally
### Prerequisites
Power-ups are built using web technologies. Specifically, this project is written in ES6 and transpiled to ES5 for release.

The build toolchain is, unsurprisingly, Node.js-based (tested with Node.js v8.10 and `npm` v5.6.0).

### Installing
Ensure you have a compatible version of Node.js installed. Then run `npm install`.
Available commands after installation:
- `npm run dist` → builds a production release of the project; output is in the `dist` folder

### Deployment
TBD

## Contributing
TBD

## Versioning
We use [SemVer](http://semver.org/) for versioning.

<!-- TODO: How to check version if it's already installed in the org?
 Possibly from the settings at the org level? Or at the board level? --->

## Authors
Angelo Tata @tatablack

## License
Apache-2.0. See [LICENSE](./LICENSE).