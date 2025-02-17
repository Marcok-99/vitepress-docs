---
title: aws.env
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0 → Deployment Files
path: /reference/airnode/latest/deployment-files/aws-env.html
version: v1.0
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

When it is time to deploy the Airnode to AWS, the Docker
[deployer image](../../grp-providers/docker/deployer-image.md) will need the AWS
credentials to build the node.

- Variable names cannot contain dashes (-) or start with a number.

```bash
AWS_ACCESS_KEY_ID=XYZ...123
AWS_SECRET_ACCESS_KEY=ABC7...89
```
