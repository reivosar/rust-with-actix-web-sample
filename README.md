# rust-with-actix-web-sample

## Overview

This repository contains a sample project demonstrating the usage of the Actix Web framework in Rust. Actix Web is a powerful, asynchronous web framework for Rust, and this sample project serves as a starting point for building web applications with it.

## Project Structure

The project is structured as follows:

- **src**: This directory contains the source code for the project.
  - **main.rs**: The main entry point for the application.
  - **handlers.rs**: Module defining request handlers for different routes.
  - **models.rs**: Module containing data models used in the application.
  - **utils.rs**: Utility functions and helpers.
- **Cargo.toml**: The project's manifest file, specifying dependencies and project configuration.

## Dependencies

The primary dependency for this project is Actix Web, which is specified in the `Cargo.toml` file. Other dependencies may be added based on the project's requirements.

```toml
[dependencies]
actix-web = "4.0.0"
```

## Getting Started

To run the sample project, follow these steps:

1. Ensure you have Rust and Cargo installed on your system.
2. Clone this repository: `git clone https://github.com/reivosar/rust-with-actix-web-sample.git`
3. Navigate to the project directory: `cd rust-with-actix-web-sample`
4. Run the project: `docker-compose up --build`

The application should now be running locally, and you can access it by navigating to `http://localhost:5173` in your web browser.


