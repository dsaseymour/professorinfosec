---
title: Startup Overview
date: "2019-09-01T23:46:37.121Z"
template: "post"
draft: false
slug: "/posts/Startupcs/"
category: "NETCore"
tags:
  - "NETCore"
  - "MVC"
description: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum."
---

Let’s begin our coverage of Startup.cs with something that is essential to the Startup class. This is the concept of services. Services are reusable components that provide app functionality. 


The Startup class is where we: 
	•	register services required by our application 
	•	define the request handling pipeline
	•	manage dependency injection

Different Startup classes can be created for different environments. 

The Startup class is specified to the app when the app’s host is built

