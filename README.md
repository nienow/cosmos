# Cosmos Editor - Standard Notes Extension

## Features

* Split a note into multiple "areas"
* Each area can use a different editor
* An editor extension marketplace for installing new editors

## Demo

https://nienow.github.io/cosmos/demo.html

## Installation File

https://nienow.github.io/cosmos/ext.json

If you don't know how to install extensions, see the [Guide to Installing Extensions](/standard-notes/installing-extensions.html).

## How it works

<img src="https://randombits.dev/images/sn/cosmos-instr.png" class="full-img"/>

The **columns** and **rows** controls allows you to change the number of areas in the note.

By default, the title of each area only shows up when the toolbar is open. The **Always Show Title** option enables always showing the title.

The bottom toolbar opens automatically when creating a new note, but will be collapsed when opening that note again. Use the expand/collapse arrow to show/hide the toolbar.

## History

I first built an extension called "Splitter" because I was consistently wanting to separate a note into multiple sections.
Originally, it just worked with the plain text editor, and it was not polished, so I didn't share it publicly.

Later, I had the idea to create some sort of marketplace, where users could install new extensions without having to find the ext.json of each extension.

Finally, I combined the two ideas, and created Cosmos.

## Security

All extensions that are included in the marketplace have been audited for security purposes.
Basically, an extension should never be sending any note data across the internet.
It should only communicate back and forth with Standard Notes.

## Adding your extension

If you have a Standard Notes extension that you would like to embed into Cosmos:

1. Clone this repo.
2. Edit the `src/editor-list.ts` file to add your extension
3. Create a pull request back to the main repo

## FAQ

### Does it work on mobile?

Yes. But if the screen is small, and if multiple areas are defined, it won't be the best experience. The extension is mostly intended to be used on large screens.

### How does the marketplace work?

The marketplace is merely a way to organize editors, so that as the list of available editors grows, you can manage which ones you like and which ones you don't. Installing merely moves the editor metadata to the initial list.

### My installed editors are not showing up on my other computer?

Your list of installed editors are stored in the browser local storage, and not in the cloud. You will have to manager the installed editors on each computer. But notes that use editors that are not installed will still work.

## About

Brought to you by [Random Bits Software Engineering](https://randombits.dev).

See my [other extensions](https://randombits.dev/standard-notes/extensions-list).


