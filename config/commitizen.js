module.exports = {
    types: [{
            value: "build",
            name: "build:     Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
        },
        { value: "feat", name: "feat:      Add new features, functional" },
        { value: "fix", name: "fix:       Fix bugs" },
        {
            value: "refactor",
            name: "refactor:  Change code without additional new features",
        },
        { value: "docs", name: "docs:      Update docs" },
        { value: "revert", name: "revert:    Back to previous commits" },
        {
            value: "style",
            name: "style:     Codestyle edits (tabs, dots, semicolons etc)",
        },
        {
            value: "ci",
            name: "ci:        Changes to our CI configuration files and scripts (just nothing)",
        },
        { value: "test", name: "test:      Add tests" },
        { value: "chore", name: "chore:     Other changes" },
    ],

    messages: {
        type: "Type of your changes:",
        subject: "Write short DESCRIPTION of your changes:\n",
        breaking: "List of BREAKING CHANGES (optional):\n",
        confirmCommit: "Everything okay?",
    },

    subjectLimit: 72,
    allowBreakingChanges: false,
    upperCaseSubject: true,
}