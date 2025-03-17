# Compose Documentation

This repository contains the source code for the [Compose docs website](https://docs.composehq.com).

## What is Compose?

Compose is an open-source platform that makes it simple for developers to build and share internal tools with their team - without leaving their codebase.

## About this repository

This repo is a Docusaurus app, deployed on Render.

To build the docs, clone this repo, install the dependencies, and run `pnpm build`.

To run the docs locally, run `pnpm start`.

The docs have a bunch of live demos of Compose apps. In local development,these demos are served via the Compose client app.

You can run the Compose client app locally by cloning the main [Compose repo](https://github.com/compose-dev/compose), running `pnpm i` to install the dependencies, then `pnpm --filter client run dev` to start the client app.
