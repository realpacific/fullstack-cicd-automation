```bash
sudo snap install circleci
sudo snap install docker
sudo snap connect circleci:docker docker
export GITHUB_TOKEN=your-token-here
circleci setup
circleci local execute
```


## References
* [How to build a CI/CD pipeline with Docker](https://circleci.com/blog/continuous-deployment-with-circleci-orbs-automate-deploys-to-aws-gcp-k8s-and-more/)
