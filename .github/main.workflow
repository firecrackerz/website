workflow "Build and publish website" {
  on = "push"
  resolves = ["Publish on GitHub pages"]
}

action "Install dependencies" {
  uses = "actions/npm@master"
  args = "install"
}

action "Build" {
  needs = "Install dependencies"
  uses = "actions/npm@master"
  args = "run build"
}

action "Master" {
  needs = "Build"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Publish on GitHub pages" {
  needs = "Master"
  uses = "pkosiec/gh-pages-action@master"
  secrets = ["SSH_KEY"]
  args = "-d public -m 'Deploy new version of site'"
}
