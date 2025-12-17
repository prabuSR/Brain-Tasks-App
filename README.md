🚀 Brain Tasks App – CI/CD Deployment on AWS EKS
📌 Project Overview

This project demonstrates an end-to-end CI/CD pipeline for deploying a React-based static web application on AWS EKS (Elastic Kubernetes Service) using AWS DevOps services.

Any code change pushed to GitHub automatically triggers the pipeline, builds a Docker image, pushes it to Amazon ECR, and deploys the updated application to Kubernetes, without manual intervention.

🏗 Architecture Diagram
Developer
   ↓ (git push)
GitHub Repository
   ↓
AWS CodePipeline
   ↓
AWS CodeBuild
   ↓
Docker Image Build
   ↓
Amazon ECR
   ↓
kubectl Deployment
   ↓
Amazon EKS
   ↓
Application via LoadBalancer

🧰 Technologies Used
Category	Tools
Version Control	GitHub
CI/CD	AWS CodePipeline
Build Automation	AWS CodeBuild
Containerization	Docker
Container Registry	Amazon ECR
Orchestration	Amazon EKS (Kubernetes)
Monitoring & Logs	Amazon CloudWatch
CLI Tools	AWS CLI, kubectl, eksctl
⚙️ CI/CD Workflow

Developer pushes code to GitHub.

GitHub webhook triggers AWS CodePipeline.

CodePipeline starts the CodeBuild project.

CodeBuild:

Builds Docker image

Pushes image to Amazon ECR

Executes kubectl to deploy to EKS

Kubernetes performs a rolling update.

Application is exposed via an EKS LoadBalancer service.

Logs and deployment status are monitored in CloudWatch.

📂 Repository Structure
Brain-Tasks-App/
│
├── dist/                  # Production build files
│   ├── assets/
│   └── index.html
│
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
│
├── Dockerfile
├── buildspec.yml
├── README.md

🐳 Dockerfile

The Dockerfile creates a lightweight container using Nginx to serve the static React application.

☸️ Kubernetes Configuration
Deployment

Runs the application pods

Pulls Docker image from Amazon ECR

Supports rolling updates

Service

Type: LoadBalancer

Exposes application publicly

🔐 IAM & Security

IAM roles used for CodeBuild access to ECR and EKS

Kubernetes RBAC configured using eksctl identity mapping

No hardcoded credentials in the codebase

📊 Monitoring & Logging
CodeBuild Logs

Stored in CloudWatch Log Group:

/aws/codebuild/brain-tasks-build

EKS Control Plane Logs
API
Audit
Scheduler
Controller Manager
Application Logs
Available via kubectl logs
Can be forwarded to CloudWatch using Fluent Bit

🧪 How to Test CI/CD Pipeline
Edit index.html and add a new <h1> tag.

Commit and push the changes:
git add .
git commit -m "Test CI/CD pipeline"
git push


Observe pipeline execution in AWS CodePipeline.
Verify new pods are created in EKS.
Open LoadBalancer URL to confirm the update.

🎯 Key Features
Fully automated CI/CD pipeline
Zero-touch deployment after setup
Free-tier compatible architecture
Kubernetes rolling deployments
Real-world DevOps workflow

🧠 Learning Outcomes
AWS CI/CD pipeline design
Docker image creation and registry management
Kubernetes deployment automation
IAM and Kubernetes RBAC integration
CloudWatch monitoring and troubleshooting

📌 Interview-Ready Summary
“I implemented a CI/CD pipeline using GitHub, AWS CodePipeline, CodeBuild, Docker, ECR, and EKS. Code changes automatically trigger container builds and Kubernetes deployments without manual intervention.”

🏁 Conclusion
This project showcases a production-style DevOps CI/CD pipeline on AWS, integrating containerization, Kubernetes orchestration, automation, and monitoring using industry best practices.

✅ Status: Successfully Deployed and Tested
