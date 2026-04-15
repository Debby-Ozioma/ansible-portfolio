# Portfolio Deployment Project (Ansible + AWS + Nginx)

## Overview

This project demonstrates a DevOps deployment pipeline for a static portfolio website using AWS EC2 instances, Ansible automation, and Nginx web server configuration.

The goal of this project is to simulate a real-world infrastructure setup where multiple servers are managed and deployed automatically from a central control node.

---

## Infrastructure Setup

The project consists of the following EC2 instances:

- pay-web01 (Web Server 1)
- pay-web02 (Web Server 2)
- pay-web03 (Web Server 3)
- pay-db01 (Database Server)

All servers are hosted on AWS EC2 and communicate within a private network.

---

## Tools and Technologies

- AWS EC2 (Infrastructure hosting)
- Amazon Linux 2023 (Primary OS)
- Ubuntu (for web03 compatibility testing)
- Ansible (Configuration management and automation)
- Nginx (Web server)
- Git (Version control)
- GitHub (Source code repository)

---

## Project Workflow

### 1. Server Provisioning
Four EC2 instances were created and configured for web and database roles.

### 2. SSH Key Configuration
A single SSH key (ansible-key.pem) was used to manage all EC2 instances securely.

### 3. Ansible Setup
Ansible was installed on the control node (pay-web01).

Inventory file was created:

- Defined all servers
- Assigned SSH key
- Configured connection variables

---

### 4. Connectivity Testing

Ansible ping module was used to verify connectivity:

```bash
ansible all -i inventory.yml -m ping

All servers responded successfully after resolving SSH authentication issues.


### 5. Nginx Deployment

Ansible playbook was created to:

Install Nginx
Start and enable the service
Deploy portfolio files
Clear default web directories

### 6. Cross-OS Compatibility Fix

One server (web03) initially failed due to package manager differences (dnf vs apt).
This was resolved by adjusting compatibility handling in the Ansible playbook.


### 7. Final Deployment

After fixes, all servers successfully:

Installed Nginx
Served the portfolio website
Passed Ansible playbook execution


### CI/CD Preparation (In Progress)

A GitHub Actions workflow was created to automate deployment:

On every push to main branch
Connect to EC2 via SSH
Run Ansible playbook automatically

This eliminates manual deployment steps.


### Key Learnings
AWS EC2 provisioning and networking
SSH authentication and key management
Ansible inventory and playbook structure
Multi-OS server management (Amazon Linux + Ubuntu)
Web server deployment using Nginx
Basic CI/CD pipeline design using GitHub Actions


### Future Improvements
Add load balancer (AWS ALB)
Use Terraform for infrastructure as code
Implement Docker containerization
Improve CI/CD pipeline with staging and production environments
