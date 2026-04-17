# GlobalAuthSetup_Project

## Overview

This project demonstrates a robust and efficient approach to handling global authentication in Playwright end-to-end tests. By leveraging Playwright's `storageState` mechanism, it ensures that authentication is performed once and then reused across multiple test files, significantly speeding up test execution and simplifying test setup. The project is configured to work with the [Tutorials Ninja Demo](https://tutorialsninja.com/demo/) website, showcasing a practical application of global authentication for e-commerce testing scenarios.

## Features

-   **Global Authentication**: Implements a single authentication flow (`auth.setup.ts`) that logs into the application and saves the session state.
-   **Session Persistence**: Utilizes Playwright's `storageState` to persist the authenticated session, allowing subsequent tests to run without re-authenticating.
-   **Playwright Test Runner**: Configured with `playwright.config.ts` for parallel test execution, retries, and comprehensive reporting.
-   **Example Tests**: Includes example test files (`Test1.spec.ts`, `Test2.spec.ts`) that demonstrate how to use the persisted session for various testing scenarios, such as searching for products and capturing screenshots.
-   **Screenshot Capture**: Automatically captures screenshots on test failure and specific element screenshots for visual verification.

## Technologies Used

-   [Playwright](https://playwright.dev/): A fast and reliable end-to-end testing framework.
-   [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
-   [Node.js](https://nodejs.org/): JavaScript runtime environment.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

-   Node.js (LTS version recommended)
-   npm (Node Package Manager) or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Sameer-Programmer/GlobalAuthSetup_Project.git
    cd GlobalAuthSetup_Project
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    ```

## Usage

### Running Authentication Setup

The authentication setup is configured to run automatically before your tests. However, you can manually trigger it if needed:

```bash
npx playwright test tests/auth.setup.ts
```

This will create `tests/storage.json` with the authenticated session.

### Running Tests

To run all tests using the globally authenticated session:

```bash
npx playwright test
```

To run a specific test file:

```bash
npx playwright test tests/Test2.spec.ts
```

### Viewing Test Reports

After running tests, you can view the HTML report:

```bash
npx playwright show-report
```

## Project Structure

```
GlobalAuthSetup_Project/
├── playwright.config.ts        # Playwright configuration file
├── package.json                # Project dependencies and scripts
├── tests/
│   ├── auth.setup.ts           # Global authentication setup script
│   ├── storage.json            # Persisted session storage (generated after auth setup)
│   ├── Test1.spec.ts           # Example test file
│   └── Test2.spec.ts           # Example test file (search and screenshot)
├── pages/                      # Page Object Model files (if applicable)
├── ScreenShots/                # Directory for captured screenshots
└── README.md                   # This README file
```

## Screenshots

Screenshots are captured during test execution and saved in the `ScreenShots/` directory. These include full-page screenshots and element-specific screenshots, useful for debugging and visual regression testing.


