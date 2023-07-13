# Medfar-UI ![Build Status](https://github.com/username/medfar-ui/workflows/CI/CD/badge.svg)

Medfar-UI is a mobile-first, accessible component library for building a consistent design system across Android, iOS & web.

## Table of Contents

- [Introduction](#introduction)
- [Motivation](#motivation)
- [Features](#features)
- [Dependencies](#dependencies)
- [Installation & Setup](#installation--setup)
- [Components](#components)
- [Tech Stack](#tech-stack)
- [Contributors]()
- [Changelog](#changelog)
- [Community]()
- [Build & Deploy](#buildAndDeploy)
- [Committing](#committing)

## Introduction

Medfar-UI is a mobile-first, component library for React & React Native. It is developed using React Native in a barefoot workflow. It supports both Android and iOS, along with web leveraging the use of react-native-web.

## Motivation

We wanted to build and ship accessible, high-quality apps quickly. 

## Features

- Accessibility (?)
- Multi language (?)
- Rich Component Library
- Light and Dark Themes
- Available for Both Mobile and Web

## Dependencies

- React
- React Native
- Style Components

## Installation & Setup

Clone the repository and install the dependencies:

```bash
git clone https://github.com/username/@medfar/med-ui.git
cd med-ui
npm install
```

## Running the Playground

We use Storybook to develop and showcase UI components. 

```bash
npm run storybook
```

## Components

For a complete list of Components, please run the storybook app and refer to the docs.

## Tech Stack

- React Native
- Typescript
- Styled Components

## Contributors

This project exists thanks to all the people who contribute.

## Changelog

Check out the changelog in the official documentation

## Community

- [Slack](#)

## Build & Deploy

Our CI/CD pipelines automatically build, test, and deploy the application to staging and production environments. Production releases are manually triggered from the main branch.

## Committing

We follow the [Conventional Commits](https://www.conventionalcommits.org/)  specification for commit messages. Here's an overview:

| Commit Type | Description                                               |
| ----------- | --------------------------------------------------------- |
| feat        | A new feature                                             |
| fix         | A bug fix                                                 |
| docs        | Documentation only changes                                |
| style       | Changes that do not affect the meaning of the code        |
| refactor    | A code change that neither fixes a bug nor adds a feature |
| perf        | A code change that improves performance                   |
| test        | Adding missing tests or correcting existing tests         |
