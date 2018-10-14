---
title: 'Docker - From zero to hero. Part 1'
author: 'Dennis Merkulov'
slug: 'docker-from-zero-to-hero'
description: Docker main points in easy way
category: Programming
keywords: docker, documentation, middle-lvl
image: ./images/docker.png
---

> Docker is a computer program that performs operating-system-level virtualization, also known as "containerization".

<cite>Wikipedia</cite>

Docker is well documented on the official site but I've faced a problem when for the first time started to learn it. It's not that simple to dive into it and understand what is the Docker and how to work with it.

With this article you will be able to understand a basic concept of the docker and try it on practice.

_Btw I'll leave a list of the useful links to learn docker better and dive deepper in different aspects of that tool!_

## Sooo

- [what is the Docker](#what)
- [why Docker](#why)
- [how to setup Docker on your machine and if it's possible at all](#setup)
- [how to use it](#commands)
- [useful links and sites to proceed with your learning](#links)

## <a name="what"></a>What is the Docker

Let me give you boring definition of the `images` and `containers` in docker:

- **Image** - holds preinstalled configuration for your project.

- **Container** - pack of software that includes everything what you need to run an application: code, runtime, system tools, system libraries and settings.

What is that?

Lets think about docker as a big ship in the sea. That ship holds a loooot of different containers. One container holds _Dragons_ another one holds _Rabbits_ and _Birds_ etc. You swim to that big ship on your ~~local machine~~ yacht and say:

-- "Hey ship! I want to have a _Dragons_ on my farm, but I don't want to rise it by myself ~~install locally all software dependecies~~. Give me a container with _Dragons_ please."

Ship says:

-- "Hey dude! You got it!"

Now you have _Dragons_ but all what you needed to do is fetch it from the ship.

If we will talk closer to programming:

> There is a [docker hub](https://hub.docker.com) with different images which holds different software packs for you. You can fetch MySQL, PHP, Drupal etc. and work with it inside a container locally, but you don't have to install all dependecies locally on your machine and fight with all the problems which this process can have.

After you fetched _PHP_ and _MySQL_ for example, created your own independent container with _PHP_ and _MySQL_ inside it, you can do whatever you want inside it and then push all that software pack to the [docker hub](https://hub.docker.com). So another developer can just fetch your **mixed** container with code and setup, run it on his machine without local installation and it would work for him, because all process happens inside container and that container holds everything that project needs for sucessfull living.

## <a name="why"></a>Why Docker

Docker can make "onboarding" of the new team member as simple as possible:

- install docker
- fetch image
- run container with all software pack inside it
- wonder how the hell it works...

Or for example when you want to try some CMS or anything else but don't want to install billion of dependecies locally. You just pull docker images and run containers with all needed pack of software inside it.

## <a name="setup"></a>How to setup Docker

There are 2 docker editions:

**Docker Community Edition (CE)** is great for developers and small teams to get started with Docker and experimenting with container-based apps.

**Docker Enterprise Edition (Docker EE)** is designed for enterprise development and IT teams.

I guess that you are as developer should use **Cummunity Edition** for your puroses.

#### Windows users

_pick one of two options_

- Install [Docker for Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows) but _You should have Microsoft Windows 10 Professional or Enterprise 64-bit._

- _For previous versions of the OS get_ [Docker Toolbox](https://docs.docker.com/toolbox/overview/).

#### If you have another OS

- Check the [documentation](https://docs.docker.com/install/) to get proper version of the Docker for you.

## <a name="commands"></a>How to use Docker

Enough theory, lets try to write some cooode!

- First after installation check if docker is working properly. Open your terminal, cmd, powershell or whatever you want to use and write

```bash
docker --version
```

You should get something like this

```bash
Docker version 17.12.0-ce, build c97c6d6
```

Great! You have docker installed! To use it make sure it's running too (run `Docker for windows.exe` on your computer, hover docker icon in the trey and see if it says 'running')

- As a tradition for programmers lets see if your installation works by running the simple Docker image, [hello-world](https://hub.docker.com/_/hello-world/):

```bash
## run
docker run hello-world

## you should get this output
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
ca4f61b1923c: Pull complete
Digest: sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.
...
```

It says **Hello from Docker!**

AWESOME! WORKS!

Sooo what did you do?

Command `docker run <image_name:version>` pulled _latest_ version (because we didn't set which version we want to pull) of the image `hello-world` from the docker hub, and created a container for this image.

Augh... Lets see on some of the commands

```bash
## List Docker CLI commands
docker
docker --help
docker container --help
docker <something_else> --help

## pulls image from docker hub and creates container
docker run <image_name:version>

## check which images you have on your computer
docker images

## Check running docker containers
docker ps

## Check all docker containers. -a flag means --all
docker ps -a

CONTAINER ID     IMAGE           COMMAND      CREATED            STATUS
54d5084ad6b8     hello-world     "/hello"     10 seconds ago     Exited (0) 19 seconds ago
```

I know that's all might look very confusing and you are not sure if you need all that crap, but give it a chance and go to the [part two of the 'Docker - from zero to hero']() series where we will cover more practical examples.

## <a name="links"></a>Useful resources

- [udemy course](https://www.udemy.com/docker-mastery/)
- [official documentation](https://docs.docker.com/)

## Conclusion of part one

We've covered very basics of the docker

- What is Docker on simple examples
- Why people use Docker
- How to install
- Pull and run your first image (with software pack preinstalled) from docker hub
- basic commands in termital

### Jump to the part two and see how Docker is awesome!

<!--
- Pull and run real programming software packs on your computer
- Dockerfile to organize your project
- Make things easier with `docker-compose`
- docker-compose terminal commands

Thank you! And stay tuned! -->
