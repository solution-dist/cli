<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="80" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.0.1-black"/>
    <img src="https://img.shields.io/badge/🔥-@solution--lib-black"/>
    <br>
    <img src="https://github.com/solution-dist/cli/actions/workflows/ci.yml/badge.svg" alt="CI" />
    <img src="https://img.shields.io/github/issues/solution-dist/cli?style=flat" alt="Github Repo Issues" />
    <img src="https://img.shields.io/github/stars/solution-dist/cli?style=social" alt="GitHub Repo stars" />
</div>
<br>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ DOC ══════════════════════════════╗ -->

- ## Quick Start 🔥

    > _**The simplest, fastest, most organized and stable way to build command line applications.**_

    > _This repository uses [`@je-es/cli`](https://github.com/je-es/cli) and managed by [`space`](https://github.com//solution-lib/space)._

    - ### Usage

        - #### Setup

            > install [`space`](https://github.com/solution-lib/space) first.

            - ##### Create

                ```bash
                > space init <name> -t cli    # This will clone this repo and make some changes to suit your app.
                > cd <name>                   # Go to the project directory
                > space install               # Install the dependencies
                ```

            - ##### Manage

                ```bash
                > space build         # To build your app
                > space test          # To test  your app
                > space start <args>  # To start your app
                ```

                ```bash
                # example
                 > space start create MyApp -t web

                # output
                  Creating MyApp as web
                ```

        - #### Structure

            - ##### Root

                ```bash
                ┣ assets
                ┃ ┗ ...            #  (logo.png, ..)
                ┃
                ┣ dist
                ┃ ┗ ...            # (main.js, main.js.map, ..)
                ┃
                ┣ src
                ┃ ┗ main.ts        # Main entry point
                ┃
                ┣ test
                ┃ ┗ main.test.ts   # Main test file
                ┃
                ┣ .env              # Environment configuration file
                ┗ .space            # Space configuration file

                # You can safely hide/ignore the rest of files.
                ```

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ END ══════════════════════════════╗ -->

<br>
<div align="center">
    <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/>
    <br>
</div>
<br>
<div align="center">
    <a href="https://github.com/solution-lib/space"><img src="https://img.shields.io/badge/by-Space-black"/></a>
</div>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->